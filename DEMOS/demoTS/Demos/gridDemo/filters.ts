import * as RIAPP from "jriapp";
import * as dbMOD from "jriapp_db";

import * as DEMODB from "../demo/demoDB";
import { ResetCommand } from "./commands";
import { DemoApplication } from "./app";

let utils = RIAPP.Utils;

export class ProductsFilter extends RIAPP.BaseObject {
    private _prodNumber: any;
    private _name: string;
    private _parentCategoryId: number;
    private _childCategoryId: number;
    private _selectedCategory: DEMODB.ProductCategory;
    private _selectedModel: DEMODB.ProductModel;
    private _modelId: number;
    private _parentCategories: dbMOD.DataView<DEMODB.ProductCategory>;
    private _childCategories: dbMOD.DataView<DEMODB.ProductCategory>;
    private _resetCommand: ResetCommand;
    private _app: DemoApplication;
    private _saleStart1: Date;
    private _saleStart2: Date;
    private _sizes: DEMODB.KeyValDictionary;
    private _size: number;

    constructor(app: DemoApplication) {
        super();
        const self = this;
        this._app = app;
        this._prodNumber = null;
        this._name = null;
        this._parentCategoryId = null;
        this._childCategoryId = null;
        this._selectedCategory = null;
        this._selectedModel = null;
        this._modelId = null;
        this._saleStart1 = null;
        this._saleStart2 = null;
        //filters top level product categories
        this._parentCategories = new dbMOD.DataView<DEMODB.ProductCategory>(
            {
                dataSource: this.ProductCategories,
                fn_sort: function (a, b) { return a.ProductCategoryId - b.ProductCategoryId; },
                fn_filter: function (item) { return item.ParentProductCategoryId == null; }
            });


        //filters product categories which have parent category
        this._childCategories = new dbMOD.DataView<DEMODB.ProductCategory>(
            {
                dataSource: this.ProductCategories,
                fn_sort: function (a, b) { return a.ProductCategoryId - b.ProductCategoryId; },
                fn_filter: function (item) { return item.ParentProductCategoryId !== null && item.ParentProductCategoryId == self.parentCategoryId; }
            });
        this._sizes = new DEMODB.KeyValDictionary();
        this._sizes.fillItems([{ key: 0, val: 'EMPTY' }, { key: 1, val: 'NOT EMPTY' }, { key: 2, val: 'SMALL SIZE' }, { key: 3, val: 'BIG SIZE' }], true);
        this._size = null;
        this._resetCommand = new ResetCommand(self);
    }
    _loadCategories() {
        let query = this.ProductCategories.createReadProductCategoryQuery();
        query.orderBy('Name');
        //returns a promise
        return query.load();
    }
    //returns a promise
    _loadProductModels() {
        let query = this.ProductModels.createReadProductModelQuery();
        query.orderBy('Name');
        //returns promise
        return query.load();
    }
    //returns a promise
    load() {
        //load two dbsets simultaneously
        let promise1 = this._loadCategories(), promise2 = this._loadProductModels();
        return utils.defer.whenAll<any>([promise1, promise2]);
    }
    reset() {
        this.parentCategoryId = null;
        this.childCategoryId = null;
        this.prodNumber = null;
        this.name = null;
        this.modelId = null;
        this.selectedModel = null;
        this.selectedCategory = null;

        this.saleStart1 = null;
        this.saleStart2 = null;
        this.size = null;
    }
    get prodNumber() { return this._prodNumber; }
    set prodNumber(v) {
        if (this._prodNumber != v) {
            this._prodNumber = v;
            this.objEvents.raiseProp('prodNumber');
        }
    }
    get name() { return this._name; }
    set name(v) {
        if (this._name != v) {
            this._name = v;
            this.objEvents.raiseProp('name');
        }
    }
    get parentCategoryId() { return this._parentCategoryId; }
    set parentCategoryId(v) {
        if (this._parentCategoryId != v) {
            this._parentCategoryId = v;
            this.objEvents.raiseProp('parentCategoryId');
            this._childCategories.refresh();
        }
    }
    get childCategoryId() { return this._childCategoryId; }
    set childCategoryId(v) {
        if (this._childCategoryId != v) {
            this._childCategoryId = v;
            this.objEvents.raiseProp('childCategoryId');
        }
    }
    get modelId() { return this._modelId; }
    set modelId(v) {
        if (this._modelId != v) {
            this._modelId = v;
            this.objEvents.raiseProp('modelId');
        }
    }
    get saleStart1() { return this._saleStart1; }
    set saleStart1(v) {
        if (this._saleStart1 != v) {
            this._saleStart1 = v;
            this.objEvents.raiseProp('saleStart1');
        }
    }
    get saleStart2() { return this._saleStart2; }
    set saleStart2(v) {
        if (this._saleStart2 != v) {
            this._saleStart2 = v;
            this.objEvents.raiseProp('saleStart2');
        }
    }
    get dbSets() { return this.dbContext.dbSets; }
    get ParentCategories() { return this._parentCategories; }
    get ChildCategories() { return this._childCategories; }
    get ProductModels() { return this.dbSets.ProductModel; }
    get ProductCategories() { return this.dbSets.ProductCategory; }
    get resetCommand() { return this._resetCommand; }
    get searchTextToolTip() { return "Use placeholder <span style='font-size: larger'><b>%</b></span><br/> for searching by part of the value"; }
    get selectedCategory() { return this._selectedCategory; }
    set selectedCategory(v) {
        if (this._selectedCategory != v) {
            this._selectedCategory = v;
            this.objEvents.raiseProp('selectedCategory');
        }
    }
    get selectedModel() { return this._selectedModel; }
    set selectedModel(v) {
        if (this._selectedModel != v) {
            this._selectedModel = v;
            this.objEvents.raiseProp('selectedModel');
        }
    }
    get sizes() { return this._sizes; }
    get size() { return this._size; }
    set size(v) {
        if (this._size != v) {
            this._size = v;
            this.objEvents.raiseProp('size');
        }
    }
    set modelData(data: {
        names: dbMOD.IFieldName[];
        rows: dbMOD.IRowData[];
    }) { this.ProductModels.fillData(data); }
    set categoryData(data: {
        names: dbMOD.IFieldName[];
        rows: dbMOD.IRowData[];
    }) { this.ProductCategories.fillData(data); }
    get dbContext() { return this._app.dbContext; }
    toString(): string {
        return "ProductFilter";
    }
}