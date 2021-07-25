import {
    ViewModel, Utils, ICollectionItem, PropWatcher, ICommand, Command, FILTER_TYPE, SORT_ORDER,
    IStatefulPromise
} from "jriapp";
import { ChildDataView, IQueryResult } from "jriapp_db";
import {
    DataGrid, DataGridRow, DataGridCell, DialogVM, ITabs, ITabsEvents, IDialogConstructorOptions, IRowStateProvider,
    IOptionStateProvider, IOptionTextProvider, DIALOG_ACTION
} from "jriapp_ui";

import * as COMMON from "common";
import * as DB from "../demo/demoDB";
import { ProductsFilter } from "./filters";
import { DemoApplication } from "./app";
import { TestInvokeCommand, TestComplexInvokeCommand } from "./commands";
import { RowStateProvider, OptionStateProvider, OptionTextProvider } from "./states";

const utils = Utils;

export class GridSelectionVM extends ViewModel<DemoApplication>
{
    private _dataGrid: DataGrid;
    private _selected: any;
    private _selectedCount: number;
    private _viewModel: ProductViewModel;

    constructor(viewModel: ProductViewModel) {
        super(viewModel.app);
        this._viewModel = viewModel;
        this._dataGrid = null;
        this._selected = {};
        this._selectedCount = 0;
    }
    dispose() {
        if (this.getIsDisposed())
            return;
        this.setDisposing();
        this.clear();
        this.dbSet.objEvents.offNS(this.uniqueID);
        super.dispose();
    }
    protected _rowSelected(item: ICollectionItem, isSelected: boolean) {
        if (!item) {
            return;
        }

        if (isSelected) {
            if (!this._selected[item._key]) {
                this._selected[item._key] = item;
                this.selectedCount += 1;
            }
        }
        else {
            if (!!this._selected[item._key]) {
                delete this._selected[item._key];
                this.selectedCount -= 1;
            }
        }
    }
    protected _onDataPageChanged(): void {
    }
    protected _onRowSelected(row: DataGridRow): void {
        this._rowSelected(row.item, row.isSelected);
    }
    protected _onRowExpanded(row: DataGridRow): void {
        this.viewModel.updateDetailsParent();
    }
    protected _onRowCollapsed(row: DataGridRow): void {
    }
    protected _onCellDblClicked(cell: DataGridCell): void {
        alert("You double clicked " + cell.uniqueID);
    }
    protected _onRowsRefreshed() {
        this.updateSelection();
        this.checkRowState();
    }
    protected _addGrid(grid: DataGrid): void {
        const self = this;
        if (!!this._dataGrid)
            this._removeGrid();
        this._dataGrid = grid;
        this._dataGrid.addOnPageChanged(function () {
            self._onDataPageChanged();
        }, this.uniqueID, this);
        this._dataGrid.addOnRowSelected(function (_s, args) {
            self._onRowSelected(args.row);
        }, this.uniqueID, this);
        this._dataGrid.addOnRowExpanded(function (_s, args) {
            if (args.isExpanded)
                self._onRowExpanded(args.expandedRow);
            else
                self._onRowCollapsed(args.collapsedRow);
        }, this.uniqueID, this);
        this._dataGrid.addOnCellDblClicked(function (_s, args) {
            self._onCellDblClicked(args.cell);
        }, this.uniqueID, this);
        this._dataGrid.addOnRefresh(function () {
            self._onRowsRefreshed();
        }, this.uniqueID);
    }
    protected _removeGrid(): void {
        if (!this._dataGrid)
            return;
        this._dataGrid.objEvents.offNS(this.uniqueID);
        this._dataGrid = null;
    }
    clear() {
        this._selected = {};
        this.selectedCount = 0;
    }
    updateSelection() {
        const self = this, keys = self.selectedIDs, grid = self._dataGrid,
            dbSet = self.dbSet;

        keys.forEach(function (key) {
            const item = dbSet.getItemByKey(key);
            if (!!item) {
                const row = grid.findRowByItem(item);
                if (!!row) {
                    row.isSelected = true;
                }
            }
        });
    }
    checkRowState() {
        if (!this._dataGrid) {
            return;
        }

        for (let row of this._dataGrid.rows) {
            var item = (<DB.Product>(row.item));

            let isDisabled = !item.IsActive;

            if (isDisabled) {
                row.isSelected = false;
                row.rowSelectorCell.isDisabled = true;
            }
            else {
                row.rowSelectorCell.isDisabled = false;
            }
        }
    }
    get currentTemplate(): string {
        return this.selectedCount > 0 ? "selectedCountTemplate" : "noneSelectedTemplate";
    }
    get grid(): DataGrid { return this._dataGrid; }
    set grid(v: DataGrid) {
        if (!!v)
            this._addGrid(v);
        else
            this._removeGrid();
    }
    get selectedCount() { return this._selectedCount; }
    set selectedCount(v) {
        const old = this._selectedCount;
        if (old !== v) {
            this._selectedCount = v;
            this.objEvents.raiseProp('selectedCount');
            this.objEvents.raiseProp('currentTemplate');
        }
    }
    get selectedIDs() { return Object.keys(this._selected); }
    get viewModel() { return this._viewModel; }
    get dbSet() { return this._viewModel.dbSet; }
}

export class ProductViewModel extends ViewModel<DemoApplication> implements ITabsEvents {
    private _filter: ProductsFilter;
    private _dbSet: DB.ProductDb;
    private _propWatcher: PropWatcher;
    private _invokeResult: any;
    //_templateId: string;
    private _testInvokeCommand: ICommand;
    private _testComplexInvokeCommand: ICommand;
    private _addNewCommand: ICommand;
    private _loadCommand: ICommand;
    private _columnCommand: ICommand;
    private _dialogVM: DialogVM;
    private _vwSalesOrderDet: ChildDataView<DB.SalesOrderDetail>;
    private _rowStateProvider: IRowStateProvider;
    private _optionTextProvider: IOptionTextProvider;
    private _optionStateProvider: IOptionStateProvider;
    private _selectionVM: GridSelectionVM;

    constructor(app: DemoApplication) {
        super(app);
        const self = this;
        this._filter = new ProductsFilter(app);
        this._dbSet = this.dbSets.Product;
        this._propWatcher = new PropWatcher();
        this._invokeResult = null;
        this._rowStateProvider = new RowStateProvider();
        this._optionTextProvider = new OptionTextProvider();
        this._optionStateProvider = new OptionStateProvider();
        this._selectionVM = new GridSelectionVM(this);
        // this._templateId = 'productEditTemplate';

        const sodAssoc = self.dbContext.associations.getSalesOrderDetail_Product();

        // the view to filter DEMODB.SalesOrderDetails related to the currently selected product only
        this._vwSalesOrderDet = new ChildDataView<DB.SalesOrderDetail>(
            {
                association: sodAssoc,
                fn_sort: function (a, b) { return a.SalesOrderDetailId - b.SalesOrderDetailId; }
            });

        // when currentItem property changes, invoke our viewmodel's method
        this._dbSet.objEvents.onProp('currentItem', function (_s, data) {
            self._onCurrentChanged();
        }, self.uniqueID);

        // if we need to confirm the deletion, this is how it is done
        this._dbSet.addOnItemDeleting(function (_s, args) {
            if (!confirm('Are you sure that you want to delete ' + args.item.Name + ' ?'))
                args.isCancel = true;
        }, self.uniqueID);

        this._dbSet.addOnCleared((_s, _args) => {
            this.dbContext.dbSets.SalesOrderDetail.clear();
        }, self.uniqueID);

        //the end edit event- the entity potentially changed its data. we can recheck conditions based on
        //entities data here
        this._dbSet.addOnEndEdit(function (_s, args) {
            if (!args.isCanceled) {
                //at the end of the editing, let the command will check: can it be executed?
                self._testInvokeCommand.raiseCanExecuteChanged();
            }
        }, self.uniqueID);

        /*
        this._dbSet.addOnFill(function (_s, args) {
            if (args.reason === COLL_CHANGE_REASON.Sorting)
                utils.async.delay(() => {
                    self.selectionVM.updateSelection();
                });
        }, self.uniqueID);
        */

        //auto submit changes when an entity is deleted
        this._dbSet.isSubmitOnDelete = true;

        //example of using custom validation on client (in addition to a built-in validation)
        const validations = [
            {
                fieldName: <string>null, fn: (item: DB.Product, errors: string[]) => {
                    if (!!item.SellEndDate) { //check it must be after Start Date
                        if (item.SellEndDate < item.SellStartDate) {
                            errors.push('End Date must be after Start Date');
                        }
                    }
            }
        },
        {
            fieldName: "Weight", fn: (item: DB.Product, errors: string[]) => {
                if (item.Weight > 20000) {
                    errors.push('Weight must be less than 20000');
                }
            }
        }];

        //example of using custom validation on client (in addition to a built-in validation)
        this._dbSet.addOnValidateField(function (_s, args) {
            let item = args.item;
            validations.filter((val) => {
                return args.fieldName === val.fieldName;
            }).forEach((val) => {
                val.fn(item, args.errors);
            });
        }, self.uniqueID);

        this._dbSet.addOnValidateItem(function (_s, args) {
            let item = args.item;
            validations.filter((val) => {
                return !val.fieldName;
            }).forEach((val) => {
                let errors: string[] = [];
                val.fn(item, errors);
                if (errors.length > 0) {
                    args.result.push({ fieldName: null, errors: errors });
                }
            });
        }, self.uniqueID);

        //adds new product - uses dialog to enter the data
        this._addNewCommand = new Command(function () {
            //grid will show the edit dialog, because we set grid options isHandleAddNew:true
            //see the options for the grid on the HTML demo page
            self._dbSet.addNew();
            //P.S. - grids editor options also has submitOnOK:true, which means
            //on clicking OK button all changes are submitted to the service
        });

        //loads data from the server for the products
        this._loadCommand = new Command(function () {
            self.load();
        });

        //example of using a method invocation on the service
        //invokes test service method with parameters and displays result with alert
        this._testInvokeCommand = new TestInvokeCommand(this);
        this._testComplexInvokeCommand = new TestComplexInvokeCommand(this);

        //for testing templates in datagrid columns
        this._columnCommand = new Command<DB.Product>(function (product) {
            alert(utils.str.format("You clicked on \"{0}\", current ProductId is: {1}", "Product Column", (!product ? "Not selected" : product.ProductId)));
        }, function () {
            return !!self.currentItem;
        });

        //the property watcher helps us handling properties changes
        //more convenient than using addOnPropertyChange
        this._propWatcher.addWatch(self, ['currentItem'], function (property: string) {
            self._testInvokeCommand.raiseCanExecuteChanged();
            self._testComplexInvokeCommand.raiseCanExecuteChanged();
        });

        this._dialogVM = new DialogVM(app);
        const dialogOptions: IDialogConstructorOptions = {
            templateID: 'invokeResultTemplate',
            width: 500,
            height: 275,
            canCancel: false, //no cancel button
            title: 'Result of a service method invocation',
            fn_OnClose: function (_dialog) {
                self.invokeResult = null;
            }
        };
        this._dialogVM.createDialog('testDialog', dialogOptions);
    }

    //#begin ITabsEvents
    addTabs(tabs: ITabs): void {
        console.log('tabs created');
    }
    removeTabs(): void {
        console.log('tabs destroyed');
    }
    onTabSelected(tabs: ITabs): void {
        console.log('tab selected: ' + tabs.tabIndex);
    }
    //#end ITabsEvents
    protected _onCurrentChanged() {
        this.objEvents.raiseProp('currentItem');
        this._columnCommand.raiseCanExecuteChanged();
    }
    updateDetailsParent() {
        this.vwSalesOrderDet.parentItem = this.currentItem;
    }
    load(): IStatefulPromise<IQueryResult<DB.Product>> {
        //clear selected items
        this._selectionVM.clear();
        //you can create several methods on the service which return the same entity type
        //but they must have different names (no overloads)
        //the query'service method can accept additional parameters which you can supply with the query
        const query = this.dbSet.createReadProductQuery({ param1: [10, 11, 12, 13, 14], param2: 'Test' });
        query.pageSize = 50;
        COMMON.addTextQuery(query, 'ProductNumber', this._filter.prodNumber);
        COMMON.addTextQuery(query, 'Name', this._filter.name);

        if (!utils.check.isNt(this._filter.childCategoryId)) {
            query.where('ProductCategoryId', FILTER_TYPE.Equals, [this._filter.childCategoryId]);
        }

        if (utils.check.isArray(this._filter.modelId) && this._filter.modelId.length > 0) {
            query.where('ProductModelId', FILTER_TYPE.Equals, this._filter.modelId.map((v) => v == -1 ? null : v));
        }

        if (!utils.check.isNt(this._filter.saleStart1) && !utils.check.isNt(this._filter.saleStart2)) {
            query.where('SellStartDate', FILTER_TYPE.Between, [this._filter.saleStart1, this._filter.saleStart2]);
        } else if (!utils.check.isNt(this._filter.saleStart1)) {
            query.where('SellStartDate', FILTER_TYPE.GtEq, [this._filter.saleStart1]);
        } else if (!utils.check.isNt(this._filter.saleStart2)) {
            query.where('SellStartDate', FILTER_TYPE.LtEq, [this._filter.saleStart2]);
        }

        switch (this.filter.size) {
            case 0: //EMPTY
                query.where('Size', FILTER_TYPE.Equals, [null]);
                break;
            case 1: //NOT EMPTY
                query.where('Size', FILTER_TYPE.NotEq, [null]);
                break;
            case 2: //SMALL SIZE
                query.where('Size', FILTER_TYPE.StartsWith, ['S']);
                break;
            case 3: //BIG SIZE
                query.where('Size', FILTER_TYPE.StartsWith, ['X']);
                break;
            default: //ALL
                break;
        }

        query.orderBy('Name').thenBy('SellStartDate', SORT_ORDER.DESC);
        return query.load();
    }
    showDialog(name?: string) {
        this._dialogVM.showDialog(name || 'testDialog', this);
    }
    dispose() {
        if (this.getIsDisposed())
            return;
        this.setDisposing();
        this._propWatcher.dispose();
        this._dbSet.objEvents.offNS(this.uniqueID);
        this._selectionVM.dispose();
    
        super.dispose();
    }
    get dbSet() { return this._dbSet; }
    //get templateId() { return this._templateId; }
    get testInvokeCommand() { return this._testInvokeCommand; }
    get testComplexInvokeCommand() { return this._testComplexInvokeCommand; }
    get addNewCommand() { return this._addNewCommand; }
    get dbContext() { return this.app.dbContext; }
    get dbSets() { return this.dbContext.dbSets; }
    get currentItem() { return this._dbSet.currentItem; }
    get filter() { return this._filter; }
    get loadCommand() { return this._loadCommand; }
    get columnCommand() { return this._columnCommand; }
    get selectionVM() { return this._selectionVM; }
    get invokeResult() { return this._invokeResult; }
    set invokeResult(v) {
        let old = this._invokeResult;
        if (old !== v) {
            this._invokeResult = v;
            this.objEvents.raiseProp('invokeResult');
        }
    }
    get vwSalesOrderDet() { return this._vwSalesOrderDet; }
    get rowStateProvider() { return this._rowStateProvider; }
    get optionTextProvider() { return this._optionTextProvider; }
    get optionStateProvider() { return this._optionStateProvider }
    get tabsEvents(): ITabsEvents { return this; }
    get dialogOptions(): IDialogConstructorOptions {
        const dialogOptions: IDialogConstructorOptions = {
            templateID: 'productEditTemplate',
            width: 950,
            height: 600,
            title: 'Edit Product',
            submitOnOK: true,
            fn_OnOpen: function (dialog) {
                const focusEdit = dialog.template.el.querySelector('span.focus-on-open input[type="text"]');
                if (!!focusEdit) {
                    (focusEdit as HTMLInputElement).focus();
                }
                console.log("edit dialog is opened");
            },
            fn_OnShow: function (_dialog) {
                console.log("edit dialog is shown"); 
            },
            fn_OnClose: function (_dialog) {
                console.log("edit dialog is closed"); 
            },
            fn_OnOK: function (_dialog): DIALOG_ACTION {
                console.log("edit dialog: OK clicked"); 
                return DIALOG_ACTION.Default;
            }
        };
        return dialogOptions;
    }
    toString(): string {
        return "ProductVM";
    }
}