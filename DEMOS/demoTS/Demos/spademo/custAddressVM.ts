﻿import * as RIAPP from "jriapp";
import * as dbMOD from "jriapp_db";

import * as DEMODB from "./domainModel";
import { DemoApplication } from "./app";
import { CustomerVM } from "./customerVM";
import { AddAddressVM } from "./addAddressVM";

export class CustomerAddressVM extends RIAPP.ViewModel<DemoApplication> {
    private _customerVM: CustomerVM;
    private _addressesDb: DEMODB.AddressDb;
    private _custAdressDb: DEMODB.CustomerAddressDb;
    private _currentCustomer: DEMODB.Customer;
    private _addAddressVM: AddAddressVM;
    private _addressesView: dbMOD.DataView<DEMODB.Address>;

    constructor(customerVM: CustomerVM) {
        super(customerVM.app);
        const self = this;
        this._customerVM = customerVM;
        this._addAddressVM = null;
        this._currentCustomer = self._customerVM.currentItem;
        this._addressesDb = this.dbSets.Address;
        this._custAdressDb = this.dbSets.CustomerAddress;

        this._custAdressDb.addOnItemDeleting(function (_s, args) {
            if (!confirm('Are you sure that you want to unlink Address from this customer?'))
                args.isCancel = true;
        }, self.uniqueID);

        this._custAdressDb.addOnBeginEdit(function (_s, args) {
            let item = args.item;
            //start editing Address entity, when CustomerAddress begins editing
            //p.s.- Address is navigation property
            let address = item.Address;
            if (!!address)
                address._aspect.beginEdit();
        }, self.uniqueID);

        this._custAdressDb.addOnEndEdit(function (_s, args) {
            let item = args.item;
            let address = item.Address;
            if (!args.isCanceled) {
                if (!!address)
                    address._aspect.endEdit();
            }
            else {
                if (address)
                    address._aspect.cancelEdit();
            }
        }, self.uniqueID);

        this._addressesDb.addOnItemDeleting(function (_s, args) {
            if (!confirm('Are you sure that you want to delete the Customer\'s Address?'))
                args.isCancel = true;
        }, self.uniqueID);

        //the view to filter addresses related to the current customer
        this._addressesView = new dbMOD.DataView<DEMODB.Address>(
            {
                dataSource: this._addressesDb,
                fn_sort: function (a, b) { return a.AddressId - b.AddressId; },
                fn_filter: function (item) {
                    if (!self._currentCustomer)
                        return false;
                    return item.CustomerAddress.some(function (ca) {
                        return self._currentCustomer === ca.Customer;
                    });
                },
                fn_itemsProvider: function (ds) {
                    if (!self._currentCustomer)
                        return [];
                    let custAdrs = self._currentCustomer.CustomerAddress;
                    return custAdrs.map(function (m) {
                        return m.Address;
                    }).filter(function (address) {
                        return !!address;
                    });
                }
            });
        /*
        this._addressesView.addOnEndEdit((s, a) => {
            self.dbContext.submitChanges();
        }, self.uniqueID, false);
        */
        this._custAdressView.addOnViewRefreshed(function (s, a) {
            self._addressesView.refresh();
        }, self.uniqueID);

        this._customerVM.objEvents.onProp('currentItem', function (_s, args) {
            self._currentCustomer = self._customerVM.currentItem;
            self.objEvents.raiseProp('currentCustomer');
        }, self.uniqueID);

    }
    //async load, returns promise
    _loadAddresses(addressIds: number[], isClearTable: boolean) {
        let query = this._addressesDb.createReadAddressByIdsQuery({ addressIDs: addressIds });
        //if true, we clear all previous data in the TDbSet
        query.isClearPrevData = isClearTable;
        //returns promise
        return query.load();
    }
    _addNewAddress() {
        // use the TDataView, not TDbSet
        let adr = this.addressesView.addNew();
        return adr;
    }
    _addNewCustAddress(address: DEMODB.Address) {
        let cust = this.currentCustomer;
        // console.log("ADDED: "+ address.CountryRegion);
        // to add item here, use the TDataView, not TDbSet
        let ca = this.custAdressView.addNew();
        ca.CustomerId = cust.CustomerId;
        // this is default, can edit later
        ca.AddressType = "Main Office";
        // create relationship with the address
        // if the address is new, then the primary keys will be aquired when the data is submitted to the server
        ca.Address = address;
        ca._aspect.endEdit();
        return ca;
    }
    load(customers: DEMODB.Customer[]) {
        let custArr = customers || [];

        //customerIds for all loaded customers entities (for current page only, not which in cache if query.loadPageCount>1)
        let custIds = custArr.map(function (item) {
            return item.CustomerId;
        });

        let query = this._custAdressDb.createReadAddressForCustomersQuery({ custIDs: custIds });
        query.load();
    }
    dispose() {
        if (this.getIsDisposed())
            return;
        this.setDisposing();

        if (!!this._addressesDb) {
            this._addressesDb.objEvents.offNS(this.uniqueID);
        }
        if (!!this._custAdressDb) {
            this._custAdressDb.objEvents.offNS(this.uniqueID);
        }
        if (!!this._customerVM) {
            this._customerVM.objEvents.offNS(this.uniqueID);
        }
        if (!!this._custAdressView) {
            this._custAdressView.objEvents.offNS(this.uniqueID);
        }
        if (this._addAddressVM) {
            this._addAddressVM.dispose();
            this._addAddressVM = null;
        }
        super.dispose();
    }
    private get _custAdressView() { return this._customerVM.custAdressView; }

    get dbContext() { return this.app.dbContext; }
    get dbSets() { return this.dbContext.dbSets; }
    get addressesDb() { return this._addressesDb; }
    get custAdressDb() { return this._custAdressDb; }
    get addressesView() { return this._addressesView; }
    get custAdressView() { return this._custAdressView; }
    get addAddressVM() {
        if (!this._addAddressVM) {
            this._addAddressVM = new AddAddressVM(this);
        }
        return this._addAddressVM;
    }
    get currentCustomer() { return this._currentCustomer; }
}