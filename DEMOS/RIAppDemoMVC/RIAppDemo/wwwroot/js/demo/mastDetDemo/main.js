var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("demo/demoDB", ["require", "exports", "jriapp_shared", "jriapp_db"], function (require, exports, RIAPP, dbMOD) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DbContext = exports.DbSets = exports.SalesOrderHeaderDb = exports.SalesOrderDetailDb = exports.SalesInfoDb = exports.ProductModelProductDescriptionDb = exports.ProductModelDb = exports.ProductDescriptionDb = exports.ProductCategoryDb = exports.ProductDb = exports.LookUpProductDb = exports.CustomerJSONDb = exports.CustomerAddressDb = exports.CustomerDb = exports.AddressInfoDb = exports.AddressDb = exports.Customer_CustomerName = exports.Customer_Contact1 = exports.HistoryList = exports.RadioValDictionary = exports.StrKeyValDictionary = exports.KeyValDictionary = exports.TestList = exports.TestDictionary = exports.TestEnum2 = exports.TestEnum = void 0;
    var TestEnum;
    (function (TestEnum) {
        TestEnum[TestEnum["None"] = 0] = "None";
        TestEnum[TestEnum["OK"] = 1] = "OK";
        TestEnum[TestEnum["Error"] = 2] = "Error";
        TestEnum[TestEnum["Loading"] = 3] = "Loading";
    })(TestEnum = exports.TestEnum || (exports.TestEnum = {}));
    var TestEnum2;
    (function (TestEnum2) {
        TestEnum2[TestEnum2["None"] = 0] = "None";
        TestEnum2[TestEnum2["One"] = 1] = "One";
        TestEnum2[TestEnum2["Two"] = 2] = "Two";
        TestEnum2[TestEnum2["Three"] = 3] = "Three";
    })(TestEnum2 = exports.TestEnum2 || (exports.TestEnum2 = {}));
    var _TestModelListItem = (function (_super) {
        __extends(_TestModelListItem, _super);
        function _TestModelListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(_TestModelListItem.prototype, "Key", {
            get: function () { return this._aspect._getProp('Key'); },
            set: function (v) { this._aspect._setProp('Key', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_TestModelListItem.prototype, "SomeProperty1", {
            get: function () { return this._aspect._getProp('SomeProperty1'); },
            set: function (v) { this._aspect._setProp('SomeProperty1', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_TestModelListItem.prototype, "SomeProperty2", {
            get: function () { return this._aspect._getProp('SomeProperty2'); },
            set: function (v) { this._aspect._setProp('SomeProperty2', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_TestModelListItem.prototype, "SomeProperty3", {
            get: function () { return this._aspect._getProp('SomeProperty3'); },
            set: function (v) { this._aspect._setProp('SomeProperty3', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_TestModelListItem.prototype, "MoreComplexProperty", {
            get: function () { return this._aspect._getProp('MoreComplexProperty'); },
            set: function (v) { this._aspect._setProp('MoreComplexProperty', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_TestModelListItem.prototype, "EnumProperty", {
            get: function () { return this._aspect._getProp('EnumProperty'); },
            set: function (v) { this._aspect._setProp('EnumProperty', v); },
            enumerable: false,
            configurable: true
        });
        _TestModelListItem.prototype.toString = function () {
            return '_TestModelListItem';
        };
        return _TestModelListItem;
    }(RIAPP.CollectionItem));
    var TestDictionary = (function (_super) {
        __extends(TestDictionary, _super);
        function TestDictionary() {
            return _super.call(this, 'Key', [{ name: 'Key', dtype: 1 }, { name: 'SomeProperty1', dtype: 1 }, { name: 'SomeProperty2', dtype: 10 }, { name: 'SomeProperty3', dtype: 0 }, { name: 'MoreComplexProperty', dtype: 0 }, { name: 'EnumProperty', dtype: 0 }]) || this;
        }
        TestDictionary.prototype.itemFactory = function (aspect) {
            return new _TestModelListItem(aspect);
        };
        TestDictionary.prototype.findItem = function (key) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        TestDictionary.prototype.toString = function () {
            return 'TestDictionary';
        };
        return TestDictionary;
    }(RIAPP.BaseDictionary));
    exports.TestDictionary = TestDictionary;
    var TestList = (function (_super) {
        __extends(TestList, _super);
        function TestList() {
            return _super.call(this, [{ name: 'Key', dtype: 1 }, { name: 'SomeProperty1', dtype: 1 }, { name: 'SomeProperty2', dtype: 10 }, { name: 'SomeProperty3', dtype: 0 }, { name: 'MoreComplexProperty', dtype: 0 }, { name: 'EnumProperty', dtype: 0 }]) || this;
        }
        TestList.prototype.itemFactory = function (aspect) {
            return new _TestModelListItem(aspect);
        };
        TestList.prototype.toString = function () {
            return 'TestList';
        };
        return TestList;
    }(RIAPP.BaseList));
    exports.TestList = TestList;
    var _KeyValListItem = (function (_super) {
        __extends(_KeyValListItem, _super);
        function _KeyValListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(_KeyValListItem.prototype, "key", {
            get: function () { return this._aspect._getProp('key'); },
            set: function (v) { this._aspect._setProp('key', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_KeyValListItem.prototype, "val", {
            get: function () { return this._aspect._getProp('val'); },
            set: function (v) { this._aspect._setProp('val', v); },
            enumerable: false,
            configurable: true
        });
        _KeyValListItem.prototype.toString = function () {
            return '_KeyValListItem';
        };
        return _KeyValListItem;
    }(RIAPP.CollectionItem));
    var KeyValDictionary = (function (_super) {
        __extends(KeyValDictionary, _super);
        function KeyValDictionary() {
            return _super.call(this, 'key', [{ name: 'key', dtype: 3 }, { name: 'val', dtype: 1 }]) || this;
        }
        KeyValDictionary.prototype.itemFactory = function (aspect) {
            return new _KeyValListItem(aspect);
        };
        KeyValDictionary.prototype.findItem = function (key) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        KeyValDictionary.prototype.toString = function () {
            return 'KeyValDictionary';
        };
        return KeyValDictionary;
    }(RIAPP.BaseDictionary));
    exports.KeyValDictionary = KeyValDictionary;
    var _StrKeyValListItem = (function (_super) {
        __extends(_StrKeyValListItem, _super);
        function _StrKeyValListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(_StrKeyValListItem.prototype, "key", {
            get: function () { return this._aspect._getProp('key'); },
            set: function (v) { this._aspect._setProp('key', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_StrKeyValListItem.prototype, "val", {
            get: function () { return this._aspect._getProp('val'); },
            set: function (v) { this._aspect._setProp('val', v); },
            enumerable: false,
            configurable: true
        });
        _StrKeyValListItem.prototype.toString = function () {
            return '_StrKeyValListItem';
        };
        return _StrKeyValListItem;
    }(RIAPP.CollectionItem));
    var StrKeyValDictionary = (function (_super) {
        __extends(StrKeyValDictionary, _super);
        function StrKeyValDictionary() {
            return _super.call(this, 'key', [{ name: 'key', dtype: 1 }, { name: 'val', dtype: 1 }]) || this;
        }
        StrKeyValDictionary.prototype.itemFactory = function (aspect) {
            return new _StrKeyValListItem(aspect);
        };
        StrKeyValDictionary.prototype.findItem = function (key) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        StrKeyValDictionary.prototype.toString = function () {
            return 'StrKeyValDictionary';
        };
        return StrKeyValDictionary;
    }(RIAPP.BaseDictionary));
    exports.StrKeyValDictionary = StrKeyValDictionary;
    var _RadioValListItem = (function (_super) {
        __extends(_RadioValListItem, _super);
        function _RadioValListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(_RadioValListItem.prototype, "key", {
            get: function () { return this._aspect._getProp('key'); },
            set: function (v) { this._aspect._setProp('key', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_RadioValListItem.prototype, "value", {
            get: function () { return this._aspect._getProp('value'); },
            set: function (v) { this._aspect._setProp('value', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_RadioValListItem.prototype, "comment", {
            get: function () { return this._aspect._getProp('comment'); },
            set: function (v) { this._aspect._setProp('comment', v); },
            enumerable: false,
            configurable: true
        });
        _RadioValListItem.prototype.toString = function () {
            return '_RadioValListItem';
        };
        return _RadioValListItem;
    }(RIAPP.CollectionItem));
    var RadioValDictionary = (function (_super) {
        __extends(RadioValDictionary, _super);
        function RadioValDictionary() {
            return _super.call(this, 'key', [{ name: 'key', dtype: 1 }, { name: 'value', dtype: 1 }, { name: 'comment', dtype: 1 }]) || this;
        }
        RadioValDictionary.prototype.itemFactory = function (aspect) {
            return new _RadioValListItem(aspect);
        };
        RadioValDictionary.prototype.findItem = function (key) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        RadioValDictionary.prototype.toString = function () {
            return 'RadioValDictionary';
        };
        return RadioValDictionary;
    }(RIAPP.BaseDictionary));
    exports.RadioValDictionary = RadioValDictionary;
    var _HistoryItemListItem = (function (_super) {
        __extends(_HistoryItemListItem, _super);
        function _HistoryItemListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(_HistoryItemListItem.prototype, "radioValue", {
            get: function () { return this._aspect._getProp('radioValue'); },
            set: function (v) { this._aspect._setProp('radioValue', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_HistoryItemListItem.prototype, "time", {
            get: function () { return this._aspect._getProp('time'); },
            set: function (v) { this._aspect._setProp('time', v); },
            enumerable: false,
            configurable: true
        });
        _HistoryItemListItem.prototype.toString = function () {
            return '_HistoryItemListItem';
        };
        return _HistoryItemListItem;
    }(RIAPP.CollectionItem));
    var HistoryList = (function (_super) {
        __extends(HistoryList, _super);
        function HistoryList() {
            return _super.call(this, [{ name: 'radioValue', dtype: 1 }, { name: 'time', dtype: 6 }]) || this;
        }
        HistoryList.prototype.itemFactory = function (aspect) {
            return new _HistoryItemListItem(aspect);
        };
        HistoryList.prototype.toString = function () {
            return 'HistoryList';
        };
        return HistoryList;
    }(RIAPP.BaseList));
    exports.HistoryList = HistoryList;
    var Customer_Contact1 = (function (_super) {
        __extends(Customer_Contact1, _super);
        function Customer_Contact1(name, parent) {
            return _super.call(this, name, parent) || this;
        }
        Object.defineProperty(Customer_Contact1.prototype, "EmailAddress", {
            get: function () { return this.getValue('CustomerName.Contact.EmailAddress'); },
            set: function (v) { this.setValue('CustomerName.Contact.EmailAddress', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Customer_Contact1.prototype, "Phone", {
            get: function () { return this.getValue('CustomerName.Contact.Phone'); },
            set: function (v) { this.setValue('CustomerName.Contact.Phone', v); },
            enumerable: false,
            configurable: true
        });
        Customer_Contact1.prototype.toString = function () {
            return 'Customer_Contact1';
        };
        return Customer_Contact1;
    }(dbMOD.ChildComplexProperty));
    exports.Customer_Contact1 = Customer_Contact1;
    var Customer_CustomerName = (function (_super) {
        __extends(Customer_CustomerName, _super);
        function Customer_CustomerName(name, owner) {
            var _this = _super.call(this, name, owner) || this;
            _this._Contact = null;
            return _this;
        }
        Object.defineProperty(Customer_CustomerName.prototype, "Contact", {
            get: function () { if (!this._Contact) {
                this._Contact = new Customer_Contact1('Contact', this);
            } return this._Contact; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Customer_CustomerName.prototype, "FirstName", {
            get: function () { return this.getValue('CustomerName.FirstName'); },
            set: function (v) { this.setValue('CustomerName.FirstName', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Customer_CustomerName.prototype, "LastName", {
            get: function () { return this.getValue('CustomerName.LastName'); },
            set: function (v) { this.setValue('CustomerName.LastName', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Customer_CustomerName.prototype, "MiddleName", {
            get: function () { return this.getValue('CustomerName.MiddleName'); },
            set: function (v) { this.setValue('CustomerName.MiddleName', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Customer_CustomerName.prototype, "Name", {
            get: function () { return this.getEntity()._getCalcFieldVal('CustomerName.Name'); },
            enumerable: false,
            configurable: true
        });
        Customer_CustomerName.prototype.toString = function () {
            return 'Customer_CustomerName';
        };
        return Customer_CustomerName;
    }(dbMOD.RootComplexProperty));
    exports.Customer_CustomerName = Customer_CustomerName;
    var AddressEntity = (function (_super) {
        __extends(AddressEntity, _super);
        function AddressEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        AddressEntity.prototype.toString = function () {
            return 'AddressEntity';
        };
        Object.defineProperty(AddressEntity.prototype, "AddressId", {
            get: function () { return this._aspect._getFieldVal('AddressId'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "AddressLine1", {
            get: function () { return this._aspect._getFieldVal('AddressLine1'); },
            set: function (v) { this._aspect._setFieldVal('AddressLine1', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "AddressLine2", {
            get: function () { return this._aspect._getFieldVal('AddressLine2'); },
            set: function (v) { this._aspect._setFieldVal('AddressLine2', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "City", {
            get: function () { return this._aspect._getFieldVal('City'); },
            set: function (v) { this._aspect._setFieldVal('City', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "CountryRegion", {
            get: function () { return this._aspect._getFieldVal('CountryRegion'); },
            set: function (v) { this._aspect._setFieldVal('CountryRegion', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "PostalCode", {
            get: function () { return this._aspect._getFieldVal('PostalCode'); },
            set: function (v) { this._aspect._setFieldVal('PostalCode', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "StateProvince", {
            get: function () { return this._aspect._getFieldVal('StateProvince'); },
            set: function (v) { this._aspect._setFieldVal('StateProvince', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "CustomerAddress", {
            get: function () { return this._aspect._getNavFieldVal('CustomerAddress'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "SalesOrderHeaderBillToAddress", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrderHeaderBillToAddress'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "SalesOrderHeaderShipToAddress", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrderHeaderShipToAddress'); },
            enumerable: false,
            configurable: true
        });
        return AddressEntity;
    }(RIAPP.CollectionItem));
    var AddressDb = (function (_super) {
        __extends(AddressDb, _super);
        function AddressDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "Address" },
                childAssoc: ([]),
                parentAssoc: ([{ "name": "CustomerAddress_Address", "parentDbSetName": "Address", "childDbSetName": "CustomerAddress", "childToParentName": "Address", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "SalesOrderHeaderBillToAddress_BillToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "BillToAddress", "parentToChildrenName": "SalesOrderHeaderBillToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "BillToAddressId" }] }, { "name": "SalesOrderHeaderShipToAddress_ShipToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "ShipToAddress", "parentToChildrenName": "SalesOrderHeaderShipToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "ShipToAddressId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "AddressId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressLine1", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 60, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressLine2", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 60, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "City", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 30, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CountryRegion", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PostalCode", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "StateProvince", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CustomerAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderHeaderBillToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderHeaderShipToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        AddressDb.prototype.itemFactory = function (aspect) {
            return new AddressEntity(aspect);
        };
        AddressDb.prototype.findEntity = function (addressId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        AddressDb.prototype.toString = function () {
            return 'AddressDb';
        };
        AddressDb.prototype.createReadAddressByIdsQuery = function (args) {
            var query = this.createQuery('ReadAddressByIds');
            query.params = args;
            return query;
        };
        AddressDb.prototype.createReadAddressQuery = function () {
            return this.createQuery('ReadAddress');
        };
        return AddressDb;
    }(dbMOD.DbSet));
    exports.AddressDb = AddressDb;
    var AddressInfoEntity = (function (_super) {
        __extends(AddressInfoEntity, _super);
        function AddressInfoEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        AddressInfoEntity.prototype.toString = function () {
            return 'AddressInfoEntity';
        };
        Object.defineProperty(AddressInfoEntity.prototype, "AddressId", {
            get: function () { return this._aspect._getFieldVal('AddressId'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressInfoEntity.prototype, "AddressLine1", {
            get: function () { return this._aspect._getFieldVal('AddressLine1'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressInfoEntity.prototype, "City", {
            get: function () { return this._aspect._getFieldVal('City'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressInfoEntity.prototype, "StateProvince", {
            get: function () { return this._aspect._getFieldVal('StateProvince'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressInfoEntity.prototype, "CountryRegion", {
            get: function () { return this._aspect._getFieldVal('CountryRegion'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressInfoEntity.prototype, "CustomerAddresses", {
            get: function () { return this._aspect._getNavFieldVal('CustomerAddresses'); },
            enumerable: false,
            configurable: true
        });
        return AddressInfoEntity;
    }(RIAPP.CollectionItem));
    var AddressInfoDb = (function (_super) {
        __extends(AddressInfoDb, _super);
        function AddressInfoDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "AddressInfo" },
                childAssoc: ([]),
                parentAssoc: ([{ "name": "CustAddr_AddressInfo", "parentDbSetName": "AddressInfo", "childDbSetName": "CustomerAddress", "childToParentName": "AddressInfo", "parentToChildrenName": "CustomerAddresses", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "AddressId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressLine1", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 200, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "City", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 30, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "StateProvince", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CountryRegion", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CustomerAddresses", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        AddressInfoDb.prototype.itemFactory = function (aspect) {
            return new AddressInfoEntity(aspect);
        };
        AddressInfoDb.prototype.findEntity = function (addressId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        AddressInfoDb.prototype.toString = function () {
            return 'AddressInfoDb';
        };
        AddressInfoDb.prototype.createReadAddressInfoQuery = function () {
            return this.createQuery('ReadAddressInfo');
        };
        return AddressInfoDb;
    }(dbMOD.DbSet));
    exports.AddressInfoDb = AddressInfoDb;
    var CustomerEntity = (function (_super) {
        __extends(CustomerEntity, _super);
        function CustomerEntity(aspect) {
            var _this = _super.call(this, aspect) || this;
            _this._CustomerName = null;
            return _this;
        }
        CustomerEntity.prototype.toString = function () {
            return 'CustomerEntity';
        };
        Object.defineProperty(CustomerEntity.prototype, "CustomerName", {
            get: function () { if (!this._CustomerName) {
                this._CustomerName = new Customer_CustomerName('CustomerName', this._aspect);
            } return this._CustomerName; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "CustomerId", {
            get: function () { return this._aspect._getFieldVal('CustomerId'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "CompanyName", {
            get: function () { return this._aspect._getFieldVal('CompanyName'); },
            set: function (v) { this._aspect._setFieldVal('CompanyName', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "NameStyle", {
            get: function () { return this._aspect._getFieldVal('NameStyle'); },
            set: function (v) { this._aspect._setFieldVal('NameStyle', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "PasswordHash", {
            get: function () { return this._aspect._getFieldVal('PasswordHash'); },
            set: function (v) { this._aspect._setFieldVal('PasswordHash', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "PasswordSalt", {
            get: function () { return this._aspect._getFieldVal('PasswordSalt'); },
            set: function (v) { this._aspect._setFieldVal('PasswordSalt', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "SalesPerson", {
            get: function () { return this._aspect._getFieldVal('SalesPerson'); },
            set: function (v) { this._aspect._setFieldVal('SalesPerson', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "Suffix", {
            get: function () { return this._aspect._getFieldVal('Suffix'); },
            set: function (v) { this._aspect._setFieldVal('Suffix', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "Title", {
            get: function () { return this._aspect._getFieldVal('Title'); },
            set: function (v) { this._aspect._setFieldVal('Title', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "AddressCount", {
            get: function () { return this._aspect._getFieldVal('AddressCount'); },
            set: function (v) { this._aspect._setFieldVal('AddressCount', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "CustomerAddress", {
            get: function () { return this._aspect._getNavFieldVal('CustomerAddress'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "SalesOrderHeader", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrderHeader'); },
            enumerable: false,
            configurable: true
        });
        return CustomerEntity;
    }(RIAPP.CollectionItem));
    var CustomerDb = (function (_super) {
        __extends(CustomerDb, _super);
        function CustomerDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "Customer" },
                childAssoc: ([]),
                parentAssoc: ([{ "name": "CustomerAddress_Customer", "parentDbSetName": "Customer", "childDbSetName": "CustomerAddress", "childToParentName": "Customer", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "SalesOrderHeader_Customer", "parentDbSetName": "Customer", "childDbSetName": "SalesOrderHeader", "childToParentName": "Customer", "parentToChildrenName": "SalesOrderHeader", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "CustomerName", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 5, "dependentOn": "", "nested": [{ "fieldName": "Contact", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 5, "dependentOn": "", "nested": [{ "fieldName": "EmailAddress", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Phone", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }] }, { "fieldName": "FirstName", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "LastName", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "MiddleName", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "CustomerName.FirstName,CustomerName.MiddleName,CustomerName.LastName", "nested": null }] }, { "fieldName": "CustomerId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CompanyName", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 128, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "NameStyle", "isPrimaryKey": 0, "dataType": 2, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PasswordHash", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 128, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PasswordSalt", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 10, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesPerson", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 256, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Suffix", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 10, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Title", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressCount", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "CustomerAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderHeader", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        CustomerDb.prototype.itemFactory = function (aspect) {
            return new CustomerEntity(aspect);
        };
        CustomerDb.prototype.findEntity = function (customerId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        CustomerDb.prototype.toString = function () {
            return 'CustomerDb';
        };
        CustomerDb.prototype.createReadCustomerQuery = function (args) {
            var query = this.createQuery('ReadCustomer');
            query.params = args;
            return query;
        };
        CustomerDb.prototype.defineCustomerName_NameField = function (getFunc) { this._defineCalculatedField('CustomerName.Name', getFunc); };
        return CustomerDb;
    }(dbMOD.DbSet));
    exports.CustomerDb = CustomerDb;
    var CustomerAddressEntity = (function (_super) {
        __extends(CustomerAddressEntity, _super);
        function CustomerAddressEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        CustomerAddressEntity.prototype.toString = function () {
            return 'CustomerAddressEntity';
        };
        Object.defineProperty(CustomerAddressEntity.prototype, "CustomerId", {
            get: function () { return this._aspect._getFieldVal('CustomerId'); },
            set: function (v) { this._aspect._setFieldVal('CustomerId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "AddressId", {
            get: function () { return this._aspect._getFieldVal('AddressId'); },
            set: function (v) { this._aspect._setFieldVal('AddressId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "AddressType", {
            get: function () { return this._aspect._getFieldVal('AddressType'); },
            set: function (v) { this._aspect._setFieldVal('AddressType', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "Address", {
            get: function () { return this._aspect._getNavFieldVal('Address'); },
            set: function (v) { this._aspect._setNavFieldVal('Address', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "AddressInfo", {
            get: function () { return this._aspect._getNavFieldVal('AddressInfo'); },
            set: function (v) { this._aspect._setNavFieldVal('AddressInfo', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "Customer", {
            get: function () { return this._aspect._getNavFieldVal('Customer'); },
            set: function (v) { this._aspect._setNavFieldVal('Customer', v); },
            enumerable: false,
            configurable: true
        });
        return CustomerAddressEntity;
    }(RIAPP.CollectionItem));
    var CustomerAddressDb = (function (_super) {
        __extends(CustomerAddressDb, _super);
        function CustomerAddressDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "CustomerAddress" },
                childAssoc: ([{ "name": "CustAddr_AddressInfo", "parentDbSetName": "AddressInfo", "childDbSetName": "CustomerAddress", "childToParentName": "AddressInfo", "parentToChildrenName": "CustomerAddresses", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Address", "parentDbSetName": "Address", "childDbSetName": "CustomerAddress", "childToParentName": "Address", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Customer", "parentDbSetName": "Customer", "childDbSetName": "CustomerAddress", "childToParentName": "Customer", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "CustomerId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressId", "isPrimaryKey": 2, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressType", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Address", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "AddressId", "nested": null }, { "fieldName": "AddressInfo", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "AddressId", "nested": null }, { "fieldName": "Customer", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "CustomerId", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        CustomerAddressDb.prototype.itemFactory = function (aspect) {
            return new CustomerAddressEntity(aspect);
        };
        CustomerAddressDb.prototype.findEntity = function (customerId, addressId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        CustomerAddressDb.prototype.toString = function () {
            return 'CustomerAddressDb';
        };
        CustomerAddressDb.prototype.createReadAddressForCustomersQuery = function (args) {
            var query = this.createQuery('ReadAddressForCustomers');
            query.params = args;
            return query;
        };
        CustomerAddressDb.prototype.createReadCustomerAddressQuery = function () {
            return this.createQuery('ReadCustomerAddress');
        };
        return CustomerAddressDb;
    }(dbMOD.DbSet));
    exports.CustomerAddressDb = CustomerAddressDb;
    var CustomerJSONEntity = (function (_super) {
        __extends(CustomerJSONEntity, _super);
        function CustomerJSONEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        CustomerJSONEntity.prototype.toString = function () {
            return 'CustomerJSONEntity';
        };
        Object.defineProperty(CustomerJSONEntity.prototype, "CustomerId", {
            get: function () { return this._aspect._getFieldVal('CustomerId'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerJSONEntity.prototype, "Data", {
            get: function () { return this._aspect._getFieldVal('Data'); },
            set: function (v) { this._aspect._setFieldVal('Data', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerJSONEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerJSONEntity.prototype, "Customer", {
            get: function () { return this._aspect._getCalcFieldVal('Customer'); },
            enumerable: false,
            configurable: true
        });
        return CustomerJSONEntity;
    }(RIAPP.CollectionItem));
    var CustomerJSONDb = (function (_super) {
        __extends(CustomerJSONDb, _super);
        function CustomerJSONDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "CustomerJSON" },
                childAssoc: ([]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "CustomerId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Data", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": false, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 16, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "Customer", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "Data", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        CustomerJSONDb.prototype.itemFactory = function (aspect) {
            return new CustomerJSONEntity(aspect);
        };
        CustomerJSONDb.prototype.findEntity = function (customerId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        CustomerJSONDb.prototype.toString = function () {
            return 'CustomerJSONDb';
        };
        CustomerJSONDb.prototype.createReadCustomerJSONQuery = function () {
            return this.createQuery('ReadCustomerJSON');
        };
        CustomerJSONDb.prototype.defineCustomerField = function (getFunc) { this._defineCalculatedField('Customer', getFunc); };
        return CustomerJSONDb;
    }(dbMOD.DbSet));
    exports.CustomerJSONDb = CustomerJSONDb;
    var LookUpProductEntity = (function (_super) {
        __extends(LookUpProductEntity, _super);
        function LookUpProductEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        LookUpProductEntity.prototype.toString = function () {
            return 'LookUpProductEntity';
        };
        Object.defineProperty(LookUpProductEntity.prototype, "ProductId", {
            get: function () { return this._aspect._getFieldVal('ProductId'); },
            set: function (v) { this._aspect._setFieldVal('ProductId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LookUpProductEntity.prototype, "Name", {
            get: function () { return this._aspect._getFieldVal('Name'); },
            set: function (v) { this._aspect._setFieldVal('Name', v); },
            enumerable: false,
            configurable: true
        });
        return LookUpProductEntity;
    }(RIAPP.CollectionItem));
    var LookUpProductDb = (function (_super) {
        __extends(LookUpProductDb, _super);
        function LookUpProductDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 25, "dbSetName": "LookUpProduct" },
                childAssoc: ([]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        LookUpProductDb.prototype.itemFactory = function (aspect) {
            return new LookUpProductEntity(aspect);
        };
        LookUpProductDb.prototype.findEntity = function (productId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        LookUpProductDb.prototype.toString = function () {
            return 'LookUpProductDb';
        };
        LookUpProductDb.prototype.createReadProductLookUpQuery = function () {
            return this.createQuery('ReadProductLookUp');
        };
        return LookUpProductDb;
    }(dbMOD.DbSet));
    exports.LookUpProductDb = LookUpProductDb;
    var ProductEntity = (function (_super) {
        __extends(ProductEntity, _super);
        function ProductEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        ProductEntity.prototype.toString = function () {
            return 'ProductEntity';
        };
        Object.defineProperty(ProductEntity.prototype, "ProductId", {
            get: function () { return this._aspect._getFieldVal('ProductId'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "Color", {
            get: function () { return this._aspect._getFieldVal('Color'); },
            set: function (v) { this._aspect._setFieldVal('Color', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "DiscontinuedDate", {
            get: function () { return this._aspect._getFieldVal('DiscontinuedDate'); },
            set: function (v) { this._aspect._setFieldVal('DiscontinuedDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ListPrice", {
            get: function () { return this._aspect._getFieldVal('ListPrice'); },
            set: function (v) { this._aspect._setFieldVal('ListPrice', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "Name", {
            get: function () { return this._aspect._getFieldVal('Name'); },
            set: function (v) { this._aspect._setFieldVal('Name', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ProductCategoryId", {
            get: function () { return this._aspect._getFieldVal('ProductCategoryId'); },
            set: function (v) { this._aspect._setFieldVal('ProductCategoryId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ProductModelId", {
            get: function () { return this._aspect._getFieldVal('ProductModelId'); },
            set: function (v) { this._aspect._setFieldVal('ProductModelId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ProductNumber", {
            get: function () { return this._aspect._getFieldVal('ProductNumber'); },
            set: function (v) { this._aspect._setFieldVal('ProductNumber', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "SellEndDate", {
            get: function () { return this._aspect._getFieldVal('SellEndDate'); },
            set: function (v) { this._aspect._setFieldVal('SellEndDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "SellStartDate", {
            get: function () { return this._aspect._getFieldVal('SellStartDate'); },
            set: function (v) { this._aspect._setFieldVal('SellStartDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "Size", {
            get: function () { return this._aspect._getFieldVal('Size'); },
            set: function (v) { this._aspect._setFieldVal('Size', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "StandardCost", {
            get: function () { return this._aspect._getFieldVal('StandardCost'); },
            set: function (v) { this._aspect._setFieldVal('StandardCost', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ThumbnailPhotoFileName", {
            get: function () { return this._aspect._getFieldVal('ThumbnailPhotoFileName'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "Weight", {
            get: function () { return this._aspect._getFieldVal('Weight'); },
            set: function (v) { this._aspect._setFieldVal('Weight', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "IsActive", {
            get: function () { return this._aspect._getCalcFieldVal('IsActive'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ProductCategory", {
            get: function () { return this._aspect._getNavFieldVal('ProductCategory'); },
            set: function (v) { this._aspect._setNavFieldVal('ProductCategory', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ProductModel", {
            get: function () { return this._aspect._getNavFieldVal('ProductModel'); },
            set: function (v) { this._aspect._setNavFieldVal('ProductModel', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "SalesOrderDetail", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrderDetail'); },
            enumerable: false,
            configurable: true
        });
        return ProductEntity;
    }(RIAPP.CollectionItem));
    var ProductDb = (function (_super) {
        __extends(ProductDb, _super);
        function ProductDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "Product" },
                childAssoc: ([{ "name": "Product_ProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "Product", "childToParentName": "ProductCategory", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ProductCategoryId" }] }, { "name": "Product_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "Product", "childToParentName": "ProductModel", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }]),
                parentAssoc: ([{ "name": "SalesOrderDetail_Product", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductId", "childField": "ProductId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Color", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "DiscontinuedDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ListPrice", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "100,5000", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductCategoryId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductModelId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "SellEndDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SellStartDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "2000-01-01,2020-01-01", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Size", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 5, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "StandardCost", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ThumbnailPhotoFileName", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Weight", "isPrimaryKey": 0, "dataType": 4, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "IsActive", "isPrimaryKey": 0, "dataType": 2, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "SellEndDate", "nested": null }, { "fieldName": "ProductCategory", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductCategoryId", "nested": null }, { "fieldName": "ProductModel", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductModelId", "nested": null }, { "fieldName": "SalesOrderDetail", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        ProductDb.prototype.itemFactory = function (aspect) {
            return new ProductEntity(aspect);
        };
        ProductDb.prototype.findEntity = function (productId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        ProductDb.prototype.toString = function () {
            return 'ProductDb';
        };
        ProductDb.prototype.createReadProductByIdsQuery = function (args) {
            var query = this.createQuery('ReadProductByIds');
            query.params = args;
            return query;
        };
        ProductDb.prototype.createReadProductQuery = function (args) {
            var query = this.createQuery('ReadProduct');
            query.params = args;
            return query;
        };
        ProductDb.prototype.defineIsActiveField = function (getFunc) { this._defineCalculatedField('IsActive', getFunc); };
        return ProductDb;
    }(dbMOD.DbSet));
    exports.ProductDb = ProductDb;
    var ProductCategoryEntity = (function (_super) {
        __extends(ProductCategoryEntity, _super);
        function ProductCategoryEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        ProductCategoryEntity.prototype.toString = function () {
            return 'ProductCategoryEntity';
        };
        Object.defineProperty(ProductCategoryEntity.prototype, "ProductCategoryId", {
            get: function () { return this._aspect._getFieldVal('ProductCategoryId'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "Name", {
            get: function () { return this._aspect._getFieldVal('Name'); },
            set: function (v) { this._aspect._setFieldVal('Name', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "ParentProductCategoryId", {
            get: function () { return this._aspect._getFieldVal('ParentProductCategoryId'); },
            set: function (v) { this._aspect._setFieldVal('ParentProductCategoryId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "Product", {
            get: function () { return this._aspect._getNavFieldVal('Product'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "ParentProductCategory", {
            get: function () { return this._aspect._getNavFieldVal('ParentProductCategory'); },
            set: function (v) { this._aspect._setNavFieldVal('ParentProductCategory', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "InverseParentProductCategory", {
            get: function () { return this._aspect._getNavFieldVal('InverseParentProductCategory'); },
            enumerable: false,
            configurable: true
        });
        return ProductCategoryEntity;
    }(RIAPP.CollectionItem));
    var ProductCategoryDb = (function (_super) {
        __extends(ProductCategoryDb, _super);
        function ProductCategoryDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductCategory" },
                childAssoc: ([{ "name": "InverseParentProductCategory_ParentProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "ProductCategory", "childToParentName": "ParentProductCategory", "parentToChildrenName": "InverseParentProductCategory", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ParentProductCategoryId" }] }]),
                parentAssoc: ([{ "name": "InverseParentProductCategory_ParentProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "ProductCategory", "childToParentName": "ParentProductCategory", "parentToChildrenName": "InverseParentProductCategory", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ParentProductCategoryId" }] }, { "name": "Product_ProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "Product", "childToParentName": "ProductCategory", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ProductCategoryId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductCategoryId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ParentProductCategoryId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Product", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "ParentProductCategory", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ParentProductCategoryId", "nested": null }, { "fieldName": "InverseParentProductCategory", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        ProductCategoryDb.prototype.itemFactory = function (aspect) {
            return new ProductCategoryEntity(aspect);
        };
        ProductCategoryDb.prototype.findEntity = function (productCategoryId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        ProductCategoryDb.prototype.toString = function () {
            return 'ProductCategoryDb';
        };
        ProductCategoryDb.prototype.createReadProductCategoryQuery = function () {
            return this.createQuery('ReadProductCategory');
        };
        return ProductCategoryDb;
    }(dbMOD.DbSet));
    exports.ProductCategoryDb = ProductCategoryDb;
    var ProductDescriptionEntity = (function (_super) {
        __extends(ProductDescriptionEntity, _super);
        function ProductDescriptionEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        ProductDescriptionEntity.prototype.toString = function () {
            return 'ProductDescriptionEntity';
        };
        Object.defineProperty(ProductDescriptionEntity.prototype, "ProductDescriptionId", {
            get: function () { return this._aspect._getFieldVal('ProductDescriptionId'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductDescriptionEntity.prototype, "Description", {
            get: function () { return this._aspect._getFieldVal('Description'); },
            set: function (v) { this._aspect._setFieldVal('Description', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductDescriptionEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductDescriptionEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductDescriptionEntity.prototype, "ProductModelProductDescription", {
            get: function () { return this._aspect._getNavFieldVal('ProductModelProductDescription'); },
            enumerable: false,
            configurable: true
        });
        return ProductDescriptionEntity;
    }(RIAPP.CollectionItem));
    var ProductDescriptionDb = (function (_super) {
        __extends(ProductDescriptionDb, _super);
        function ProductDescriptionDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductDescription" },
                childAssoc: ([]),
                parentAssoc: ([{ "name": "ProductModelProductDescription_ProductDescription", "parentDbSetName": "ProductDescription", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductDescription", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductDescriptionId", "childField": "ProductDescriptionId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductDescriptionId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Description", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 400, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductModelProductDescription", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        ProductDescriptionDb.prototype.itemFactory = function (aspect) {
            return new ProductDescriptionEntity(aspect);
        };
        ProductDescriptionDb.prototype.findEntity = function (productDescriptionId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        ProductDescriptionDb.prototype.toString = function () {
            return 'ProductDescriptionDb';
        };
        return ProductDescriptionDb;
    }(dbMOD.DbSet));
    exports.ProductDescriptionDb = ProductDescriptionDb;
    var ProductModelEntity = (function (_super) {
        __extends(ProductModelEntity, _super);
        function ProductModelEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        ProductModelEntity.prototype.toString = function () {
            return 'ProductModelEntity';
        };
        Object.defineProperty(ProductModelEntity.prototype, "ProductModelId", {
            get: function () { return this._aspect._getFieldVal('ProductModelId'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "CatalogDescription", {
            get: function () { return this._aspect._getFieldVal('CatalogDescription'); },
            set: function (v) { this._aspect._setFieldVal('CatalogDescription', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "Name", {
            get: function () { return this._aspect._getFieldVal('Name'); },
            set: function (v) { this._aspect._setFieldVal('Name', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "Product", {
            get: function () { return this._aspect._getNavFieldVal('Product'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "ProductModelProductDescription", {
            get: function () { return this._aspect._getNavFieldVal('ProductModelProductDescription'); },
            enumerable: false,
            configurable: true
        });
        return ProductModelEntity;
    }(RIAPP.CollectionItem));
    var ProductModelDb = (function (_super) {
        __extends(ProductModelDb, _super);
        function ProductModelDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductModel" },
                childAssoc: ([]),
                parentAssoc: ([{ "name": "Product_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "Product", "childToParentName": "ProductModel", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }, { "name": "ProductModelProductDescription_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductModel", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductModelId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CatalogDescription", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Product", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "ProductModelProductDescription", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        ProductModelDb.prototype.itemFactory = function (aspect) {
            return new ProductModelEntity(aspect);
        };
        ProductModelDb.prototype.findEntity = function (productModelId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        ProductModelDb.prototype.toString = function () {
            return 'ProductModelDb';
        };
        ProductModelDb.prototype.createReadProductModelQuery = function () {
            return this.createQuery('ReadProductModel');
        };
        return ProductModelDb;
    }(dbMOD.DbSet));
    exports.ProductModelDb = ProductModelDb;
    var ProductModelProductDescriptionEntity = (function (_super) {
        __extends(ProductModelProductDescriptionEntity, _super);
        function ProductModelProductDescriptionEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        ProductModelProductDescriptionEntity.prototype.toString = function () {
            return 'ProductModelProductDescriptionEntity';
        };
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "ProductModelId", {
            get: function () { return this._aspect._getFieldVal('ProductModelId'); },
            set: function (v) { this._aspect._setFieldVal('ProductModelId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "ProductDescriptionId", {
            get: function () { return this._aspect._getFieldVal('ProductDescriptionId'); },
            set: function (v) { this._aspect._setFieldVal('ProductDescriptionId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "Culture", {
            get: function () { return this._aspect._getFieldVal('Culture'); },
            set: function (v) { this._aspect._setFieldVal('Culture', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "ProductDescription", {
            get: function () { return this._aspect._getNavFieldVal('ProductDescription'); },
            set: function (v) { this._aspect._setNavFieldVal('ProductDescription', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "ProductModel", {
            get: function () { return this._aspect._getNavFieldVal('ProductModel'); },
            set: function (v) { this._aspect._setNavFieldVal('ProductModel', v); },
            enumerable: false,
            configurable: true
        });
        return ProductModelProductDescriptionEntity;
    }(RIAPP.CollectionItem));
    var ProductModelProductDescriptionDb = (function (_super) {
        __extends(ProductModelProductDescriptionDb, _super);
        function ProductModelProductDescriptionDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductModelProductDescription" },
                childAssoc: ([{ "name": "ProductModelProductDescription_ProductDescription", "parentDbSetName": "ProductDescription", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductDescription", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductDescriptionId", "childField": "ProductDescriptionId" }] }, { "name": "ProductModelProductDescription_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductModel", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductModelId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductDescriptionId", "isPrimaryKey": 2, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Culture", "isPrimaryKey": 3, "dataType": 1, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 6, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductDescription", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductDescriptionId", "nested": null }, { "fieldName": "ProductModel", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductModelId", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        ProductModelProductDescriptionDb.prototype.itemFactory = function (aspect) {
            return new ProductModelProductDescriptionEntity(aspect);
        };
        ProductModelProductDescriptionDb.prototype.findEntity = function (productModelId, productDescriptionId, culture) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        ProductModelProductDescriptionDb.prototype.toString = function () {
            return 'ProductModelProductDescriptionDb';
        };
        return ProductModelProductDescriptionDb;
    }(dbMOD.DbSet));
    exports.ProductModelProductDescriptionDb = ProductModelProductDescriptionDb;
    var SalesInfoEntity = (function (_super) {
        __extends(SalesInfoEntity, _super);
        function SalesInfoEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        SalesInfoEntity.prototype.toString = function () {
            return 'SalesInfoEntity';
        };
        Object.defineProperty(SalesInfoEntity.prototype, "SalesPerson", {
            get: function () { return this._aspect._getFieldVal('SalesPerson'); },
            set: function (v) { this._aspect._setFieldVal('SalesPerson', v); },
            enumerable: false,
            configurable: true
        });
        return SalesInfoEntity;
    }(RIAPP.CollectionItem));
    var SalesInfoDb = (function (_super) {
        __extends(SalesInfoDb, _super);
        function SalesInfoDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 25, "dbSetName": "SalesInfo" },
                childAssoc: ([]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesPerson", "isPrimaryKey": 1, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        SalesInfoDb.prototype.itemFactory = function (aspect) {
            return new SalesInfoEntity(aspect);
        };
        SalesInfoDb.prototype.findEntity = function (salesPerson) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        SalesInfoDb.prototype.toString = function () {
            return 'SalesInfoDb';
        };
        SalesInfoDb.prototype.createReadSalesInfoQuery = function () {
            return this.createQuery('ReadSalesInfo');
        };
        return SalesInfoDb;
    }(dbMOD.DbSet));
    exports.SalesInfoDb = SalesInfoDb;
    var SalesOrderDetailEntity = (function (_super) {
        __extends(SalesOrderDetailEntity, _super);
        function SalesOrderDetailEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        SalesOrderDetailEntity.prototype.toString = function () {
            return 'SalesOrderDetailEntity';
        };
        Object.defineProperty(SalesOrderDetailEntity.prototype, "SalesOrderId", {
            get: function () { return this._aspect._getFieldVal('SalesOrderId'); },
            set: function (v) { this._aspect._setFieldVal('SalesOrderId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "SalesOrderDetailId", {
            get: function () { return this._aspect._getFieldVal('SalesOrderDetailId'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "LineTotal", {
            get: function () { return this._aspect._getFieldVal('LineTotal'); },
            set: function (v) { this._aspect._setFieldVal('LineTotal', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "OrderQty", {
            get: function () { return this._aspect._getFieldVal('OrderQty'); },
            set: function (v) { this._aspect._setFieldVal('OrderQty', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "ProductId", {
            get: function () { return this._aspect._getFieldVal('ProductId'); },
            set: function (v) { this._aspect._setFieldVal('ProductId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "UnitPrice", {
            get: function () { return this._aspect._getFieldVal('UnitPrice'); },
            set: function (v) { this._aspect._setFieldVal('UnitPrice', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "UnitPriceDiscount", {
            get: function () { return this._aspect._getFieldVal('UnitPriceDiscount'); },
            set: function (v) { this._aspect._setFieldVal('UnitPriceDiscount', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "Product", {
            get: function () { return this._aspect._getNavFieldVal('Product'); },
            set: function (v) { this._aspect._setNavFieldVal('Product', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "SalesOrder", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrder'); },
            set: function (v) { this._aspect._setNavFieldVal('SalesOrder', v); },
            enumerable: false,
            configurable: true
        });
        return SalesOrderDetailEntity;
    }(RIAPP.CollectionItem));
    var SalesOrderDetailDb = (function (_super) {
        __extends(SalesOrderDetailDb, _super);
        function SalesOrderDetailDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "SalesOrderDetail" },
                childAssoc: ([{ "name": "SalesOrderDetail_Product", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductId", "childField": "ProductId" }] }, { "name": "SalesOrderDetail_SalesOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrder", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "SalesOrderId", "childField": "SalesOrderId" }] }]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesOrderId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderDetailId", "isPrimaryKey": 2, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "LineTotal", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "OrderQty", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductId", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "UnitPrice", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "UnitPriceDiscount", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Product", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductId", "nested": null }, { "fieldName": "SalesOrder", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "SalesOrderId", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        SalesOrderDetailDb.prototype.itemFactory = function (aspect) {
            return new SalesOrderDetailEntity(aspect);
        };
        SalesOrderDetailDb.prototype.findEntity = function (salesOrderId, salesOrderDetailId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        SalesOrderDetailDb.prototype.toString = function () {
            return 'SalesOrderDetailDb';
        };
        SalesOrderDetailDb.prototype.createReadSalesOrderDetailQuery = function () {
            return this.createQuery('ReadSalesOrderDetail');
        };
        return SalesOrderDetailDb;
    }(dbMOD.DbSet));
    exports.SalesOrderDetailDb = SalesOrderDetailDb;
    var SalesOrderHeaderEntity = (function (_super) {
        __extends(SalesOrderHeaderEntity, _super);
        function SalesOrderHeaderEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        SalesOrderHeaderEntity.prototype.toString = function () {
            return 'SalesOrderHeaderEntity';
        };
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "SalesOrderId", {
            get: function () { return this._aspect._getFieldVal('SalesOrderId'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "AccountNumber", {
            get: function () { return this._aspect._getFieldVal('AccountNumber'); },
            set: function (v) { this._aspect._setFieldVal('AccountNumber', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "BillToAddressId", {
            get: function () { return this._aspect._getFieldVal('BillToAddressId'); },
            set: function (v) { this._aspect._setFieldVal('BillToAddressId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "Comment", {
            get: function () { return this._aspect._getFieldVal('Comment'); },
            set: function (v) { this._aspect._setFieldVal('Comment', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "CreditCardApprovalCode", {
            get: function () { return this._aspect._getFieldVal('CreditCardApprovalCode'); },
            set: function (v) { this._aspect._setFieldVal('CreditCardApprovalCode', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "CustomerId", {
            get: function () { return this._aspect._getFieldVal('CustomerId'); },
            set: function (v) { this._aspect._setFieldVal('CustomerId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "DueDate", {
            get: function () { return this._aspect._getFieldVal('DueDate'); },
            set: function (v) { this._aspect._setFieldVal('DueDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "Freight", {
            get: function () { return this._aspect._getFieldVal('Freight'); },
            set: function (v) { this._aspect._setFieldVal('Freight', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "OnlineOrderFlag", {
            get: function () { return this._aspect._getFieldVal('OnlineOrderFlag'); },
            set: function (v) { this._aspect._setFieldVal('OnlineOrderFlag', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "OrderDate", {
            get: function () { return this._aspect._getFieldVal('OrderDate'); },
            set: function (v) { this._aspect._setFieldVal('OrderDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "PurchaseOrderNumber", {
            get: function () { return this._aspect._getFieldVal('PurchaseOrderNumber'); },
            set: function (v) { this._aspect._setFieldVal('PurchaseOrderNumber', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "RevisionNumber", {
            get: function () { return this._aspect._getFieldVal('RevisionNumber'); },
            set: function (v) { this._aspect._setFieldVal('RevisionNumber', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "SalesOrderNumber", {
            get: function () { return this._aspect._getFieldVal('SalesOrderNumber'); },
            set: function (v) { this._aspect._setFieldVal('SalesOrderNumber', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "ShipDate", {
            get: function () { return this._aspect._getFieldVal('ShipDate'); },
            set: function (v) { this._aspect._setFieldVal('ShipDate', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "ShipMethod", {
            get: function () { return this._aspect._getFieldVal('ShipMethod'); },
            set: function (v) { this._aspect._setFieldVal('ShipMethod', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "ShipToAddressId", {
            get: function () { return this._aspect._getFieldVal('ShipToAddressId'); },
            set: function (v) { this._aspect._setFieldVal('ShipToAddressId', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "Status", {
            get: function () { return this._aspect._getFieldVal('Status'); },
            set: function (v) { this._aspect._setFieldVal('Status', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "SubTotal", {
            get: function () { return this._aspect._getFieldVal('SubTotal'); },
            set: function (v) { this._aspect._setFieldVal('SubTotal', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "TaxAmt", {
            get: function () { return this._aspect._getFieldVal('TaxAmt'); },
            set: function (v) { this._aspect._setFieldVal('TaxAmt', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "TotalDue", {
            get: function () { return this._aspect._getFieldVal('TotalDue'); },
            set: function (v) { this._aspect._setFieldVal('TotalDue', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "SalesOrderDetail", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrderDetail'); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "BillToAddress", {
            get: function () { return this._aspect._getNavFieldVal('BillToAddress'); },
            set: function (v) { this._aspect._setNavFieldVal('BillToAddress', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "Customer", {
            get: function () { return this._aspect._getNavFieldVal('Customer'); },
            set: function (v) { this._aspect._setNavFieldVal('Customer', v); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "ShipToAddress", {
            get: function () { return this._aspect._getNavFieldVal('ShipToAddress'); },
            set: function (v) { this._aspect._setNavFieldVal('ShipToAddress', v); },
            enumerable: false,
            configurable: true
        });
        return SalesOrderHeaderEntity;
    }(RIAPP.CollectionItem));
    var SalesOrderHeaderDb = (function (_super) {
        __extends(SalesOrderHeaderDb, _super);
        function SalesOrderHeaderDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "SalesOrderHeader" },
                childAssoc: ([{ "name": "SalesOrderHeader_Customer", "parentDbSetName": "Customer", "childDbSetName": "SalesOrderHeader", "childToParentName": "Customer", "parentToChildrenName": "SalesOrderHeader", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "SalesOrderHeaderBillToAddress_BillToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "BillToAddress", "parentToChildrenName": "SalesOrderHeaderBillToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "BillToAddressId" }] }, { "name": "SalesOrderHeaderShipToAddress_ShipToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "ShipToAddress", "parentToChildrenName": "SalesOrderHeaderShipToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "ShipToAddressId" }] }]),
                parentAssoc: ([{ "name": "SalesOrderDetail_SalesOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrder", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "SalesOrderId", "childField": "SalesOrderId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesOrderId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AccountNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "BillToAddressId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Comment", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CreditCardApprovalCode", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CustomerId", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "DueDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Freight", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "OnlineOrderFlag", "isPrimaryKey": 0, "dataType": 2, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "OrderDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PurchaseOrderNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "RevisionNumber", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "ShipDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ShipMethod", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ShipToAddressId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Status", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SubTotal", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "TaxAmt", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "TotalDue", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderDetail", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "BillToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "BillToAddressId", "nested": null }, { "fieldName": "Customer", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "CustomerId", "nested": null }, { "fieldName": "ShipToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ShipToAddressId", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        SalesOrderHeaderDb.prototype.itemFactory = function (aspect) {
            return new SalesOrderHeaderEntity(aspect);
        };
        SalesOrderHeaderDb.prototype.findEntity = function (salesOrderId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        SalesOrderHeaderDb.prototype.toString = function () {
            return 'SalesOrderHeaderDb';
        };
        SalesOrderHeaderDb.prototype.createReadSalesOrderHeaderQuery = function () {
            return this.createQuery('ReadSalesOrderHeader');
        };
        return SalesOrderHeaderDb;
    }(dbMOD.DbSet));
    exports.SalesOrderHeaderDb = SalesOrderHeaderDb;
    var DbSets = (function (_super) {
        __extends(DbSets, _super);
        function DbSets(dbContext) {
            var _this = _super.call(this, dbContext) || this;
            _this._createDbSet("Address", AddressDb);
            _this._createDbSet("AddressInfo", AddressInfoDb);
            _this._createDbSet("Customer", CustomerDb);
            _this._createDbSet("CustomerAddress", CustomerAddressDb);
            _this._createDbSet("CustomerJSON", CustomerJSONDb);
            _this._createDbSet("LookUpProduct", LookUpProductDb);
            _this._createDbSet("Product", ProductDb);
            _this._createDbSet("ProductCategory", ProductCategoryDb);
            _this._createDbSet("ProductDescription", ProductDescriptionDb);
            _this._createDbSet("ProductModel", ProductModelDb);
            _this._createDbSet("ProductModelProductDescription", ProductModelProductDescriptionDb);
            _this._createDbSet("SalesInfo", SalesInfoDb);
            _this._createDbSet("SalesOrderDetail", SalesOrderDetailDb);
            _this._createDbSet("SalesOrderHeader", SalesOrderHeaderDb);
            return _this;
        }
        Object.defineProperty(DbSets.prototype, "Address", {
            get: function () { return this.getDbSet("Address"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "AddressInfo", {
            get: function () { return this.getDbSet("AddressInfo"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "Customer", {
            get: function () { return this.getDbSet("Customer"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "CustomerAddress", {
            get: function () { return this.getDbSet("CustomerAddress"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "CustomerJSON", {
            get: function () { return this.getDbSet("CustomerJSON"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "LookUpProduct", {
            get: function () { return this.getDbSet("LookUpProduct"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "Product", {
            get: function () { return this.getDbSet("Product"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "ProductCategory", {
            get: function () { return this.getDbSet("ProductCategory"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "ProductDescription", {
            get: function () { return this.getDbSet("ProductDescription"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "ProductModel", {
            get: function () { return this.getDbSet("ProductModel"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "ProductModelProductDescription", {
            get: function () { return this.getDbSet("ProductModelProductDescription"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "SalesInfo", {
            get: function () { return this.getDbSet("SalesInfo"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "SalesOrderDetail", {
            get: function () { return this.getDbSet("SalesOrderDetail"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "SalesOrderHeader", {
            get: function () { return this.getDbSet("SalesOrderHeader"); },
            enumerable: false,
            configurable: true
        });
        return DbSets;
    }(dbMOD.DbSets));
    exports.DbSets = DbSets;
    var DbContext = (function (_super) {
        __extends(DbContext, _super);
        function DbContext() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DbContext.prototype._createDbSets = function () {
            return new DbSets(this);
        };
        DbContext.prototype._createAssociations = function () {
            return [{ "name": "CustAddr_AddressInfo", "parentDbSetName": "AddressInfo", "childDbSetName": "CustomerAddress", "childToParentName": "AddressInfo", "parentToChildrenName": "CustomerAddresses", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Address", "parentDbSetName": "Address", "childDbSetName": "CustomerAddress", "childToParentName": "Address", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Customer", "parentDbSetName": "Customer", "childDbSetName": "CustomerAddress", "childToParentName": "Customer", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "InverseParentProductCategory_ParentProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "ProductCategory", "childToParentName": "ParentProductCategory", "parentToChildrenName": "InverseParentProductCategory", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ParentProductCategoryId" }] }, { "name": "Product_ProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "Product", "childToParentName": "ProductCategory", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ProductCategoryId" }] }, { "name": "Product_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "Product", "childToParentName": "ProductModel", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }, { "name": "ProductModelProductDescription_ProductDescription", "parentDbSetName": "ProductDescription", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductDescription", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductDescriptionId", "childField": "ProductDescriptionId" }] }, { "name": "ProductModelProductDescription_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductModel", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }, { "name": "SalesOrderDetail_Product", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductId", "childField": "ProductId" }] }, { "name": "SalesOrderDetail_SalesOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrder", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "SalesOrderId", "childField": "SalesOrderId" }] }, { "name": "SalesOrderHeader_Customer", "parentDbSetName": "Customer", "childDbSetName": "SalesOrderHeader", "childToParentName": "Customer", "parentToChildrenName": "SalesOrderHeader", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "SalesOrderHeaderBillToAddress_BillToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "BillToAddress", "parentToChildrenName": "SalesOrderHeaderBillToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "BillToAddressId" }] }, { "name": "SalesOrderHeaderShipToAddress_ShipToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "ShipToAddress", "parentToChildrenName": "SalesOrderHeaderShipToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "ShipToAddressId" }] }];
        };
        DbContext.prototype._createMethods = function () {
            return [{ "methodName": "ReadAddress", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadAddressByIds", "parameters": [{ "name": "addressIDs", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadAddressForCustomers", "parameters": [{ "name": "custIDs", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadAddressInfo", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadCustomer", "parameters": [{ "name": "includeNav", "dataType": 2, "isArray": false, "isNullable": true, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadCustomerAddress", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadCustomerJSON", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProduct", "parameters": [{ "name": "param1", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "param2", "dataType": 1, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductByIds", "parameters": [{ "name": "productIDs", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductCategory", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductLookUp", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductModel", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesInfo", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesOrderDetail", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesOrderHeader", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "GetClassifiers", "parameters": [], "methodResult": true, "isQuery": false }, { "methodName": "TestComplexInvoke", "parameters": [{ "name": "info", "dataType": 0, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "keys", "dataType": 0, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": true, "isQuery": false }, { "methodName": "TestInvoke", "parameters": [{ "name": "param1", "dataType": 10, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "param2", "dataType": 1, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": true, "isQuery": false }];
        };
        return DbContext;
    }(dbMOD.DbContext));
    exports.DbContext = DbContext;
});
define("mastDetDemo/prodAutocomplete", ["require", "exports", "autocomplete"], function (require, exports, AUTOCOMPLETE) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initModule = exports.ProductAutoComplete = void 0;
    var ProductAutoComplete = (function (_super) {
        __extends(ProductAutoComplete, _super);
        function ProductAutoComplete(el, options) {
            var _this = _super.call(this, el, options) || this;
            var self = _this;
            _this._lastLoadedId = null;
            _this._lookupSource = _this._getDbContext().getDbSet('Product');
            _this._lookupSource.addOnCollChanged(function (_s, args) {
                self._updateValue();
            }, self.uniqueID);
            return _this;
        }
        ProductAutoComplete.prototype._updateSelection = function () {
            if (!!this.dataContext) {
                var id = this.currentSelection;
                this.getDataContext().ProductId = id;
            }
        };
        ProductAutoComplete.prototype._onHide = function () {
            this._updateValue();
            _super.prototype._onHide.call(this);
        };
        ProductAutoComplete.prototype._updateValue = function () {
            if (!this.dataContext) {
                this.value = '';
                return;
            }
            var productId = this.getDataContext().ProductId, product = this._lookupSource.findEntity(productId);
            if (!!product) {
                this.value = product.Name;
            }
            else {
                this.value = '';
                if (this._lastLoadedId !== productId) {
                    this._lastLoadedId = productId;
                    var query = this._lookupSource.createReadProductByIdsQuery({ productIDs: [productId] });
                    query.isClearPrevData = false;
                    query.load();
                }
            }
        };
        ProductAutoComplete.prototype.setDataContext = function (v) {
            var old = this.getDataContext(), self = this;
            if (old !== v) {
                var dxt = v;
                if (!!dxt) {
                    dxt.objEvents.onProp('ProductId', function (_s, a) {
                        self._updateValue();
                    }, this.uniqueID);
                }
                _super.prototype.setDataContext.call(this, v);
                self._updateValue();
            }
        };
        ProductAutoComplete.prototype.getDataContext = function () { return _super.prototype.getDataContext.call(this); };
        Object.defineProperty(ProductAutoComplete.prototype, "currentSelection", {
            get: function () {
                if (!!this.gridDataSource.currentItem) {
                    return this.gridDataSource.currentItem['ProductId'];
                }
                else {
                    return null;
                }
            },
            enumerable: false,
            configurable: true
        });
        return ProductAutoComplete;
    }(AUTOCOMPLETE.AutoCompleteElView));
    exports.ProductAutoComplete = ProductAutoComplete;
    function initModule(app) {
        app.registerElView('productAutocomplete', ProductAutoComplete);
    }
    exports.initModule = initModule;
    ;
});
define("mastDetDemo/productVM", ["require", "exports", "jriapp"], function (require, exports, RIAPP) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductVM = void 0;
    var ProductVM = (function (_super) {
        __extends(ProductVM, _super);
        function ProductVM(orderDetailVM) {
            var _this = _super.call(this, orderDetailVM.app) || this;
            var self = _this;
            _this._orderDetailVM = orderDetailVM;
            _this._dbSet = _this.dbSets.Product;
            _this._customerDbSet.addOnCleared(function (s, a) {
                self.clear();
            }, self.uniqueID);
            _this._orderDetailVM.dbSet.addOnFill(function (_s, args) {
                self.loadProductsForOrderDetails(args.items);
            }, self.uniqueID);
            _this._dbSet.objEvents.onProp('currentItem', function (_s, args) {
                self._onCurrentChanged();
            }, self.uniqueID);
            return _this;
        }
        ProductVM.prototype._onCurrentChanged = function () {
            this.objEvents.raiseProp('currentItem');
        };
        ProductVM.prototype.clear = function () {
            this.dbSet.clear();
        };
        ProductVM.prototype.loadProductsForOrderDetails = function (orderDetails) {
            var ids = orderDetails.map(function (item) {
                return item.ProductId;
            }).filter(function (id) {
                return id !== null;
            });
            return this.load(RIAPP.Utils.arr.distinct(ids), false);
        };
        ProductVM.prototype.load = function (ids, isClearTable) {
            var query = this.dbSet.createReadProductByIdsQuery({ productIDs: ids });
            query.isClearPrevData = isClearTable;
            return query.load();
        };
        ProductVM.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            if (!!this._dbSet) {
                this._dbSet.objEvents.offNS(this.uniqueID);
            }
            this._customerDbSet.objEvents.offNS(this.uniqueID);
            this._orderDetailVM.objEvents.offNS(this.uniqueID);
            this._orderDetailVM = null;
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(ProductVM.prototype, "_customerDbSet", {
            get: function () { return this._orderDetailVM.orderVM.customerVM.dbSet; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductVM.prototype, "dbContext", {
            get: function () { return this.app.dbContext; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductVM.prototype, "dbSets", {
            get: function () { return this.dbContext.dbSets; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductVM.prototype, "currentItem", {
            get: function () { return this._dbSet.currentItem; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductVM.prototype, "dbSet", {
            get: function () { return this._dbSet; },
            enumerable: false,
            configurable: true
        });
        return ProductVM;
    }(RIAPP.ViewModel));
    exports.ProductVM = ProductVM;
});
define("mastDetDemo/orderDetVM", ["require", "exports", "jriapp", "jriapp_ui", "mastDetDemo/productVM"], function (require, exports, RIAPP, uiMOD, productVM_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OrderDetailVM = void 0;
    var utils = RIAPP.Utils, $ = uiMOD.$;
    var OrderDetailVM = (function (_super) {
        __extends(OrderDetailVM, _super);
        function OrderDetailVM(orderVM) {
            var _this = _super.call(this, orderVM.app) || this;
            var self = _this;
            _this._dbSet = _this.dbSets.SalesOrderDetail;
            _this._orderVM = orderVM;
            _this._currentOrder = null;
            _this._orderVM.dbSet.addOnCleared(function (s, a) {
                self.clear();
            }, self.uniqueID);
            _this._dbSet.objEvents.onProp('currentItem', function (_s, args) {
                self._onCurrentChanged();
            }, self.uniqueID);
            _this._productVM = new productVM_1.ProductVM(_this);
            return _this;
        }
        OrderDetailVM.prototype._onCurrentChanged = function () {
            this.objEvents.raiseProp('currentItem');
        };
        OrderDetailVM.prototype.load = function () {
            this.clear();
            if (!this.currentOrder || this.currentOrder._aspect.isNew) {
                var deferred = utils.async.createDeferred();
                deferred.reject();
                return deferred.promise();
            }
            var query = this.dbSet.createReadSalesOrderDetailQuery();
            query.where('SalesOrderId', 0, [this.currentOrder.SalesOrderId]);
            query.orderBy('SalesOrderDetailId');
            return query.load();
        };
        OrderDetailVM.prototype.clear = function () {
            this.dbSet.clear();
        };
        OrderDetailVM.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            if (!!this._dbSet) {
                this._dbSet.objEvents.offNS(this.uniqueID);
            }
            this.currentOrder = null;
            this._productVM.dispose();
            this._orderVM.dbSet.objEvents.offNS(this.uniqueID);
            this._orderVM.objEvents.offNS(this.uniqueID);
            this._orderVM = null;
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(OrderDetailVM.prototype, "dbContext", {
            get: function () { return this.app.dbContext; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderDetailVM.prototype, "dbSets", {
            get: function () { return this.dbContext.dbSets; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderDetailVM.prototype, "currentItem", {
            get: function () { return this._dbSet.currentItem; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderDetailVM.prototype, "dbSet", {
            get: function () { return this._dbSet; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderDetailVM.prototype, "currentOrder", {
            get: function () { return this._currentOrder; },
            set: function (v) {
                if (v !== this._currentOrder) {
                    this._currentOrder = v;
                    this.objEvents.raiseProp('currentOrder');
                    this.load();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderDetailVM.prototype, "orderVM", {
            get: function () { return this._orderVM; },
            enumerable: false,
            configurable: true
        });
        return OrderDetailVM;
    }(RIAPP.ViewModel));
    exports.OrderDetailVM = OrderDetailVM;
});
define("mastDetDemo/addressVM", ["require", "exports", "jriapp"], function (require, exports, RIAPP) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddressVM = void 0;
    var AddressVM = (function (_super) {
        __extends(AddressVM, _super);
        function AddressVM(orderVM) {
            var _this = _super.call(this, orderVM.app) || this;
            var self = _this;
            _this._orderVM = orderVM;
            _this._dbSet = _this.dbSets.Address;
            _this._orderVM.dbSet.addOnFill(function (_s, args) {
                self.loadAddressesForOrders(args.items);
            }, self.uniqueID);
            _this._dbSet.objEvents.onProp('currentItem', function (_s, args) {
                self._onCurrentChanged();
            }, self.uniqueID);
            return _this;
        }
        AddressVM.prototype._onCurrentChanged = function () {
            this.objEvents.raiseProp('currentItem');
        };
        AddressVM.prototype.loadAddressesForOrders = function (orders) {
            var ids1 = orders.map(function (item) {
                return item.ShipToAddressId;
            });
            var ids2 = orders.map(function (item) {
                return item.BillToAddressId;
            });
            var ids = ids1.concat(ids2).filter(function (id) {
                return id !== null;
            });
            return this.load(RIAPP.Utils.arr.distinct(ids), false);
        };
        AddressVM.prototype.load = function (ids, isClearTable) {
            var query = this.dbSet.createReadAddressByIdsQuery({ addressIDs: ids });
            query.isClearPrevData = isClearTable;
            return query.load();
        };
        AddressVM.prototype.clear = function () {
            this.dbSet.clear();
        };
        AddressVM.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            if (!!this._dbSet) {
                this._dbSet.objEvents.offNS(this.uniqueID);
            }
            this._customerDbSet.objEvents.offNS(this.uniqueID);
            this._orderVM.objEvents.offNS(this.uniqueID);
            this._orderVM = null;
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(AddressVM.prototype, "_customerDbSet", {
            get: function () { return this._orderVM.customerVM.dbSet; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressVM.prototype, "dbContext", {
            get: function () { return this.app.dbContext; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressVM.prototype, "dbSets", {
            get: function () { return this.dbContext.dbSets; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressVM.prototype, "currentItem", {
            get: function () { return this._dbSet.currentItem; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressVM.prototype, "dbSet", {
            get: function () { return this._dbSet; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AddressVM.prototype, "orderVM", {
            get: function () { return this._orderVM; },
            enumerable: false,
            configurable: true
        });
        return AddressVM;
    }(RIAPP.ViewModel));
    exports.AddressVM = AddressVM;
});
define("mastDetDemo/orderVM", ["require", "exports", "jriapp", "jriapp_ui", "demo/demoDB", "mastDetDemo/orderDetVM", "mastDetDemo/addressVM"], function (require, exports, RIAPP, uiMOD, DEMODB, orderDetVM_1, addressVM_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OrderVM = void 0;
    var utils = RIAPP.Utils, $ = uiMOD.$, dates = utils.dates;
    var OrderVM = (function (_super) {
        __extends(OrderVM, _super);
        function OrderVM(customerVM) {
            var _this = _super.call(this, customerVM.app) || this;
            var self = _this;
            _this._customerVM = customerVM;
            _this._dbSet = _this.dbSets.SalesOrderHeader;
            _this._currentCustomer = null;
            _this._dataGrid = null;
            _this._selectedTabIndex = null;
            _this._tabs = null;
            _this._orderStatuses = new DEMODB.KeyValDictionary();
            _this._orderStatuses.fillItems([{ key: 0, val: 'New Order' }, { key: 1, val: 'Status 1' },
                { key: 2, val: 'Status 2' }, { key: 3, val: 'Status 3' },
                { key: 4, val: 'Status 4' }, { key: 5, val: 'Completed Order' }], true);
            _this._customerVM.objEvents.on('row_expanded', function (_s, args) {
                if (args.isExpanded) {
                    self.currentCustomer = args.customer;
                }
                else {
                    self.currentCustomer = null;
                }
            }, self.uniqueID);
            _this._dbSet.objEvents.onProp('currentItem', function () {
                self._onCurrentChanged();
            }, self.uniqueID);
            _this._dbSet.addOnItemDeleting(function (_s, args) {
                if (!confirm('Are you sure that you want to delete order ?'))
                    args.isCancel = true;
            }, self.uniqueID);
            _this._dbSet.addOnItemAdded(function (_s, args) {
                var item = args.item;
                item.Customer = self.currentCustomer;
                item.OrderDate = new Date();
                item.DueDate = dates.add(new Date(), 7, "day");
                item.OnlineOrderFlag = false;
                item.RevisionNumber = 1;
            }, self.uniqueID);
            _this._addNewCommand = new RIAPP.Command(function () {
                self._dbSet.addNew();
            });
            _this._addressVM = new addressVM_1.AddressVM(_this);
            _this._orderDetailVM = new orderDetVM_1.OrderDetailVM(_this);
            return _this;
        }
        OrderVM.prototype._addGrid = function (grid) {
            var self = this;
            if (!!this._dataGrid)
                this._removeGrid();
            this._dataGrid = grid;
            this._dataGrid.addOnRowExpanded(function (_s, args) {
                if (args.isExpanded)
                    self.onRowExpanded(args.expandedRow);
                else
                    self.onRowCollapsed(args.collapsedRow);
            }, this.uniqueID, this);
        };
        OrderVM.prototype._removeGrid = function () {
            if (!this._dataGrid)
                return;
            this._dataGrid.objEvents.offNS(this.uniqueID);
            this._dataGrid = null;
        };
        OrderVM.prototype.onRowExpanded = function (row) {
            this.objEvents.raise('row_expanded', { order: row.item, isExpanded: true });
            if (!!this._tabs) {
                this.onTabSelected(this._tabs);
            }
        };
        OrderVM.prototype.onRowCollapsed = function (row) {
            this.objEvents.raise('row_expanded', { order: row.item, isExpanded: false });
        };
        OrderVM.prototype.addTabs = function (tabs) {
            this._tabs = tabs;
        };
        OrderVM.prototype.removeTabs = function () {
            this._tabs = null;
        };
        OrderVM.prototype.onTabSelected = function (tabs) {
            this._selectedTabIndex = tabs.tabIndex;
            this.objEvents.raiseProp('selectedTabIndex');
            if (this._selectedTabIndex == 2) {
                this._orderDetailVM.currentOrder = this.dbSet.currentItem;
            }
        };
        OrderVM.prototype._onCurrentChanged = function () {
            this.objEvents.raiseProp('currentItem');
        };
        OrderVM.prototype.clear = function () {
            this.dbSet.clear();
        };
        OrderVM.prototype.load = function () {
            this.clear();
            if (!this.currentCustomer || this.currentCustomer._aspect.isNew) {
                var deferred = utils.async.createDeferred();
                deferred.reject();
                return deferred.promise();
            }
            var query = this.dbSet.createReadSalesOrderHeaderQuery();
            query.where('CustomerId', 0, [this.currentCustomer.CustomerId]);
            query.orderBy('OrderDate').thenBy('SalesOrderId');
            return query.load();
        };
        OrderVM.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            if (!!this._dbSet) {
                this._dbSet.objEvents.offNS(this.uniqueID);
            }
            if (!!this._dataGrid) {
                this._dataGrid.objEvents.offNS(this.uniqueID);
            }
            this.currentCustomer = null;
            this._addressVM.dispose();
            this._addressVM = null;
            this._orderDetailVM.dispose();
            this._orderDetailVM = null;
            this._customerVM = null;
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(OrderVM.prototype, "dbContext", {
            get: function () { return this.app.dbContext; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "dbSets", {
            get: function () { return this.dbContext.dbSets; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "currentItem", {
            get: function () { return this._dbSet.currentItem; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "dbSet", {
            get: function () { return this._dbSet; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "addNewCommand", {
            get: function () { return this._addNewCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "orderStatuses", {
            get: function () { return this._orderStatuses; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "currentCustomer", {
            get: function () { return this._currentCustomer; },
            set: function (v) {
                if (v !== this._currentCustomer) {
                    this._currentCustomer = v;
                    this.objEvents.raiseProp('currentCustomer');
                    this.load();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "customerVM", {
            get: function () { return this._customerVM; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "orderDetailsVM", {
            get: function () { return this._orderDetailVM; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "selectedTabIndex", {
            get: function () { return this._selectedTabIndex; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "tabsEvents", {
            get: function () { return this; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OrderVM.prototype, "grid", {
            get: function () { return this._dataGrid; },
            set: function (v) {
                if (!!v)
                    this._addGrid(v);
                else
                    this._removeGrid();
            },
            enumerable: false,
            configurable: true
        });
        return OrderVM;
    }(RIAPP.ViewModel));
    exports.OrderVM = OrderVM;
});
define("mastDetDemo/customerVM", ["require", "exports", "jriapp", "jriapp_db", "jriapp_ui", "mastDetDemo/orderVM"], function (require, exports, RIAPP, dbMOD, uiMOD, orderVM_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerVM = void 0;
    var utils = RIAPP.Utils, $ = uiMOD.$;
    var CustomerVM = (function (_super) {
        __extends(CustomerVM, _super);
        function CustomerVM(app) {
            var _this = _super.call(this, app) || this;
            var self = _this;
            _this._dataGrid = null;
            _this._dbSet = _this.dbSets.Customer;
            _this._propWatcher = new RIAPP.PropWatcher();
            _this._dbSet.addOnItemDeleting(function (_s, args) {
                if (!confirm('Are you sure that you want to delete customer ?'))
                    args.isCancel = true;
            }, self.uniqueID);
            _this._dbSet.addOnPageIndexChanged(function (_s, args) {
                self.objEvents.raise('page_changed', {});
            }, self.uniqueID);
            _this._dbSet.addOnValidateField(function (_s, args) {
                var item = args.item;
                if (args.fieldName == "CustomerName.Contact.Phone") {
                    if (utils.str.startsWith(args.item.CustomerName.Contact.Phone, '888')) {
                        args.errors.push('Phone must not start with 888!');
                    }
                }
            }, self.uniqueID);
            _this._dbSet.addOnItemAdded(function (s, args) {
                args.item.NameStyle = false;
                args.item.CustomerName.LastName = "DummyLastName";
                args.item.CustomerName.FirstName = "DummyFirstName";
            });
            _this._addNewCommand = new RIAPP.Command(function () {
                self._dbSet.addNew();
            });
            _this._saveCommand = new RIAPP.Command(function () {
                self.dbContext.submitChanges();
            }, function () {
                return self.dbContext.isHasChanges;
            });
            _this._undoCommand = new RIAPP.Command(function () {
                self.dbContext.rejectChanges();
            }, function () {
                return self.dbContext.isHasChanges;
            });
            _this._loadCommand = new RIAPP.Command(function () {
                self.load();
            });
            _this._propWatcher.addPropWatch(self.dbContext, 'isHasChanges', function (_prop) {
                self._saveCommand.raiseCanExecuteChanged();
                self._undoCommand.raiseCanExecuteChanged();
            });
            _this._propWatcher.addPropWatch(_this._dbSet, 'currentItem', function (_prop) {
                self._onCurrentChanged();
            });
            _this._dbSet.addOnCleared(function (s, a) {
                self.dbSets.CustomerAddress.clear();
                self.dbSets.Address.clear();
            }, self.uniqueID);
            var custAssoc = self.dbContext.associations.getCustomerAddress_Customer();
            _this._custAdressView = new dbMOD.ChildDataView({
                association: custAssoc,
                fn_sort: function (a, b) { return a.AddressId - b.AddressId; }
            });
            _this._ordersVM = new orderVM_1.OrderVM(_this);
            return _this;
        }
        CustomerVM.prototype._addGrid = function (grid) {
            var self = this;
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
        };
        CustomerVM.prototype._removeGrid = function () {
            if (!this._dataGrid)
                return;
            this._dataGrid.objEvents.offNS(this.uniqueID);
            this._dataGrid = null;
        };
        CustomerVM.prototype.onRowExpanded = function (row) {
            this.objEvents.raise('row_expanded', { customer: row.item, isExpanded: true });
        };
        CustomerVM.prototype.onRowCollapsed = function (row) {
            this.objEvents.raise('row_expanded', { customer: row.item, isExpanded: false });
        };
        CustomerVM.prototype.onCellDblClicked = function (cell) {
            alert("You double clicked " + cell.uniqueID);
        };
        CustomerVM.prototype._onCurrentChanged = function () {
            this._custAdressView.parentItem = this._dbSet.currentItem;
            this.objEvents.raiseProp('currentItem');
        };
        CustomerVM.prototype.load = function () {
            var self = this, query = this._dbSet.createReadCustomerQuery({ includeNav: true });
            query.pageSize = 50;
            query.orderBy('CustomerName.LastName').thenBy('CustomerName.MiddleName').thenBy('CustomerName.FirstName');
            var res = query.load();
            return res;
        };
        CustomerVM.prototype.dispose = function () {
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
            this._ordersVM.dispose();
            this._ordersVM = null;
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(CustomerVM.prototype, "dbContext", {
            get: function () { return this.app.dbContext; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerVM.prototype, "dbSets", {
            get: function () { return this.dbContext.dbSets; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerVM.prototype, "dbSet", {
            get: function () { return this._dbSet; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerVM.prototype, "currentItem", {
            get: function () { return this._dbSet.currentItem; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerVM.prototype, "addNewCommand", {
            get: function () { return this._addNewCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerVM.prototype, "saveCommand", {
            get: function () { return this._saveCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerVM.prototype, "undoCommand", {
            get: function () { return this._undoCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerVM.prototype, "loadCommand", {
            get: function () { return this._loadCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerVM.prototype, "ordersVM", {
            get: function () { return this._ordersVM; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerVM.prototype, "custAdressView", {
            get: function () { return this._custAdressView; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomerVM.prototype, "grid", {
            get: function () { return this._dataGrid; },
            set: function (v) {
                if (!!v)
                    this._addGrid(v);
                else
                    this._removeGrid();
            },
            enumerable: false,
            configurable: true
        });
        return CustomerVM;
    }(RIAPP.ViewModel));
    exports.CustomerVM = CustomerVM;
});
define("mastDetDemo/app", ["require", "exports", "jriapp", "demo/demoDB", "common", "mastDetDemo/customerVM"], function (require, exports, RIAPP, DEMODB, COMMON, customerVM_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DemoApplication = void 0;
    var DemoApplication = (function (_super) {
        __extends(DemoApplication, _super);
        function DemoApplication(options) {
            var _this = _super.call(this, options) || this;
            var self = _this;
            _this._dbContext = null;
            _this._errorVM = null;
            _this._customerVM = null;
            return _this;
        }
        DemoApplication.prototype.onStartUp = function () {
            var self = this, options = self.options;
            this._dbContext = new DEMODB.DbContext();
            this._dbContext.initialize({ serviceUrl: options.service_url, permissions: options.permissionInfo });
            function toText(str) {
                if (str === null)
                    return '';
                else
                    return str;
            }
            ;
            this._dbContext.dbSets.Customer.defineCustomerName_NameField(function (item) {
                return toText(item.CustomerName.LastName) + '  ' + toText(item.CustomerName.MiddleName) + '  ' + toText(item.CustomerName.FirstName);
            });
            this.registerSvc("$dbContext", this._dbContext);
            this._errorVM = new COMMON.ErrorViewModel(this);
            this._customerVM = new customerVM_1.CustomerVM(this);
            function handleError(sender, data) {
                self._handleError(sender, data);
            }
            ;
            this.objEvents.addOnError(handleError);
            this._dbContext.objEvents.addOnError(handleError);
            this._dbContext.requestHeaders['RequestVerificationToken'] = COMMON.getAntiForgeryToken();
        };
        DemoApplication.prototype._handleError = function (sender, data) {
            debugger;
            data.isHandled = true;
            this.errorVM.error = data.error;
            this.errorVM.showDialog();
        };
        DemoApplication.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            var self = this;
            try {
                self._errorVM.dispose();
                self._customerVM.dispose();
                self._dbContext.dispose();
            }
            finally {
                _super.prototype.dispose.call(this);
            }
        };
        Object.defineProperty(DemoApplication.prototype, "dbContext", {
            get: function () { return this._dbContext; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "errorVM", {
            get: function () { return this._errorVM; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "customerVM", {
            get: function () { return this._customerVM; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "TEXT", {
            get: function () { return RIAPP.LocaleSTRS.TEXT; },
            enumerable: false,
            configurable: true
        });
        return DemoApplication;
    }(RIAPP.Application));
    exports.DemoApplication = DemoApplication;
});
define("mastDetDemo/main", ["require", "exports", "jriapp", "common", "autocomplete", "mastDetDemo/prodAutocomplete", "mastDetDemo/app"], function (require, exports, RIAPP, COMMON, AUTOCOMPLETE, PRODAUTOCOMPLETE, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.start = void 0;
    var bootstrap = RIAPP.bootstrapper;
    bootstrap.objEvents.addOnError(function (_s, args) {
        debugger;
        alert(args.error.message);
    });
    function start(options) {
        options.modulesInits = {
            "COMMON": COMMON.initModule,
            "AUTOCOMPLETE": AUTOCOMPLETE.initModule,
            "PRODAUTOCOMPLETE": PRODAUTOCOMPLETE.initModule
        };
        return bootstrap.startApp(function () {
            return new app_1.DemoApplication(options);
        }).then(function (app) {
            return app.customerVM.load();
        });
    }
    exports.start = start;
});
