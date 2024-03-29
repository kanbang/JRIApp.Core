﻿import * as RIAPP from "jriapp";
import * as dbMOD from "jriapp_db";
import * as uiMOD from "jriapp_ui";
import * as COMMON from "common";

import * as DEMODB from "../demo/demoDB";
import { DemoApplication } from "./app";
import { OrderVM } from "./orderVM";

const utils = RIAPP.Utils, $ = uiMOD.$;

export class CustomerVM extends RIAPP.ViewModel<DemoApplication> {
    private _dataGrid: uiMOD.DataGrid;
    private _dbSet: DEMODB.CustomerDb;
    private _propWatcher: RIAPP.PropWatcher;
    private _addNewCommand: RIAPP.ICommand;
    private _saveCommand: RIAPP.ICommand;
    private _undoCommand: RIAPP.ICommand;
    private _loadCommand: RIAPP.ICommand;
    private _custAdressView: dbMOD.ChildDataView<DEMODB.CustomerAddress>;
    private _ordersVM: OrderVM;

    constructor(app: DemoApplication) {
        super(app);
        const self = this;
        this._dataGrid = null;
        this._dbSet = this.dbSets.Customer;
        // this._dbSet.isSubmitOnDelete = true;
        this._propWatcher = new RIAPP.PropWatcher();

        this._dbSet.addOnItemDeleting(function (_s, args) {
            if (!confirm('Are you sure that you want to delete customer ?'))
                args.isCancel = true;
        }, self.uniqueID);

        this._dbSet.addOnPageIndexChanged(function (_s, args) {
            self.objEvents.raise('page_changed', {});
        }, self.uniqueID);

        // example of using custom validation on client (in addition to a built-in validation)
        this._dbSet.addOnValidateField(function (_s, args) {
            const item = args.item;
            // check complex property value
            if (args.fieldName == "CustomerName.Contact.Phone") {
                if (utils.str.startsWith(args.item.CustomerName.Contact.Phone, '888')) {
                    args.errors.push('Phone must not start with 888!');
                }
            }
        }, self.uniqueID);

        this._dbSet.addOnItemAdded((s, args) => {
            args.item.NameStyle = false;
            args.item.CustomerName.LastName = "DummyLastName";
            args.item.CustomerName.FirstName = "DummyFirstName";
        });

        //adds new customer - uses dialog to enter the data
        this._addNewCommand = new RIAPP.Command(function () {
            //showing of the dialog is handled by the datagrid
            self._dbSet.addNew();
        });

        //saves changes (submitts them to the service)
        this._saveCommand = new RIAPP.Command(function () {
            self.dbContext.submitChanges();
        }, function () {
            //the command is enabled when there are pending changes
            return self.dbContext.isHasChanges;
        });


        this._undoCommand = new RIAPP.Command(function () {
            self.dbContext.rejectChanges();
        }, function () {
            //the command is enabled when there are pending changes
            return self.dbContext.isHasChanges;
        });

        //load data from the server
        this._loadCommand = new RIAPP.Command(function () {
            self.load();
        });

        //the property watcher helps us handling properties changes
        //more convenient than using addOnPropertyChange
        this._propWatcher.addPropWatch(self.dbContext, 'isHasChanges', function (_prop) {
            self._saveCommand.raiseCanExecuteChanged();
            self._undoCommand.raiseCanExecuteChanged();
        });

        this._propWatcher.addPropWatch(this._dbSet, 'currentItem', function (_prop) {
            self._onCurrentChanged();
        });

        this._dbSet.addOnCleared(function (s, a) {
            self.dbSets.CustomerAddress.clear();
            self.dbSets.Address.clear();
        }, self.uniqueID);

        let custAssoc = self.dbContext.associations.getCustomerAddress_Customer();

        //the view to filter CustomerAddresses related to the current customer only
        this._custAdressView = new dbMOD.ChildDataView<DEMODB.CustomerAddress>(
            {
                association: custAssoc,
                fn_sort: function (a, b) { return a.AddressId - b.AddressId; }
            });

        this._ordersVM = new OrderVM(this);
    }
    protected _addGrid(grid: uiMOD.DataGrid): void {
        const self = this;
        if (!!this._dataGrid)
            this._removeGrid();
        this._dataGrid = grid;
        this._dataGrid.addOnRowExpanded(function (s, args) {
            if (args.isExpanded)
                self.onRowExpanded(args.expandedRow);
            else
                self.onRowCollapsed(args.collapsedRow);
        }, this.uniqueID, this);
        this._dataGrid.addOnCellDblClicked(function (s, args) {
            self.onCellDblClicked(args.cell);
        }, this.uniqueID, this);
    }
    protected _removeGrid(): void {
        if (!this._dataGrid)
            return;
        this._dataGrid.objEvents.offNS(this.uniqueID);
        this._dataGrid = null;
    }
    protected onRowExpanded(row: uiMOD.DataGridRow): void {
        this.objEvents.raise('row_expanded', { customer: row.item, isExpanded: true });
    }
    protected onRowCollapsed(row: uiMOD.DataGridRow): void {
        this.objEvents.raise('row_expanded', { customer: row.item, isExpanded: false });
    }
    protected onCellDblClicked(cell: uiMOD.DataGridCell): void {
        alert("You double clicked " + cell.uniqueID);
    }
    protected _onCurrentChanged() {
        this._custAdressView.parentItem = this._dbSet.currentItem;
        this.objEvents.raiseProp('currentItem');
    }
    //returns promise
    load() {
        const self = this, query = this._dbSet.createReadCustomerQuery({ includeNav: true });
        query.pageSize = 50;
        query.orderBy('CustomerName.LastName').thenBy('CustomerName.MiddleName').thenBy('CustomerName.FirstName');
        let res = query.load();
        
        //for testing of fillItems method
        /*
        res.then((data) => {
            setTimeout(() => {
                self.dbSet.fillItems(self.dbSet.items.map((item, index, arr) => {
                    return item._aspect.obj;
                }));
            }, 2000);
        });
        */
        return res;
    }
    dispose() {
        if (this.getIsDisposed())
            return;
        this.setDisposing();
        this._propWatcher.dispose();
        this._propWatcher = null;

        if (!!this._dbSet) {
            this._dbSet.objEvents.offNS(this.uniqueID);
        }
        if (!!this._dataGrid) {
            this._dataGrid.objEvents.offNS(this.uniqueID);
        }

        this._ordersVM.dispose()
        this._ordersVM = null;
        super.dispose();
    }
    get dbContext() { return this.app.dbContext; }
    get dbSets() { return this.dbContext.dbSets; }
    get dbSet() { return this._dbSet; }
    get currentItem() { return this._dbSet.currentItem; }
    get addNewCommand() { return this._addNewCommand; }
    get saveCommand() { return this._saveCommand; }
    get undoCommand() { return this._undoCommand; }
    get loadCommand() { return this._loadCommand; }
    get ordersVM() { return this._ordersVM; }
    get custAdressView() { return this._custAdressView; }
    get grid(): uiMOD.DataGrid { return this._dataGrid; }
    set grid(v: uiMOD.DataGrid) {
        if (!!v)
            this._addGrid(v);
        else
            this._removeGrid();
    }
}