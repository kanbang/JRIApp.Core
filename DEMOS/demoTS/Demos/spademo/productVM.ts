﻿import * as RIAPP from "jriapp";

import * as DEMODB from "./domainModel";
import { DemoApplication } from "./app";
import { OrderDetailVM } from "./orderDetVM";

export class ProductVM extends RIAPP.ViewModel<DemoApplication> {
    private _orderDetailVM: OrderDetailVM;
    private _dbSet: DEMODB.ProductDb;

    constructor(orderDetailVM: OrderDetailVM) {
        super(orderDetailVM.app);
        const self = this;
        this._orderDetailVM = orderDetailVM;
        this._dbSet = this.dbSets.Product;

        this._customerDbSet.addOnCleared(function (s, a) {
            self.clear();
        }, self.uniqueID);

        //here we load products which are referenced in order details
        this._orderDetailVM.dbSet.addOnFill(function (_s, args) {
            self.loadProductsForOrderDetails(args.items);
        }, self.uniqueID);

        this._dbSet.objEvents.onProp('currentItem', function (_s, args) {
            self._onCurrentChanged();
        }, self.uniqueID);
    }
    protected _onCurrentChanged() {
        this.objEvents.raiseProp('currentItem');
    }
    clear() {
        this.dbSet.clear();
    }
    //returns promise
    loadProductsForOrderDetails(orderDetails: DEMODB.SalesOrderDetail[]) {
        let ids: number[] = orderDetails.map(function (item) {
            return item.ProductId;
        }).filter(function (id) {
            return id !== null;
        });

        return this.load(RIAPP.Utils.arr.distinct(ids), false);
    }
    //returns promise
    load(ids: number[], isClearTable: boolean) {
        let query = this.dbSet.createReadProductByIdsQuery({ productIDs: ids });
        query.isClearPrevData = isClearTable;
        return query.load();
    }
    dispose() {
        if (this.getIsDisposed())
            return;
        this.setDisposing();
        if (!!this._dbSet) {
            this._dbSet.objEvents.offNS(this.uniqueID);
        }
        this._customerDbSet.objEvents.offNS(this.uniqueID);
        this._orderDetailVM.objEvents.offNS(this.uniqueID);
        this._orderDetailVM = null;
        super.dispose();
    }
    get _customerDbSet() { return this._orderDetailVM.orderVM.customerVM.dbSet; }
    get dbContext() { return this.app.dbContext; }
    get dbSets() { return this.dbContext.dbSets; }
    get currentItem() { return this._dbSet.currentItem; }
    get dbSet() { return this._dbSet; }
}