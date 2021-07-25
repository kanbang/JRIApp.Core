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
define("gridDemo/commands", ["require", "exports", "jriapp"], function (require, exports, RIAPP) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ResetCommand = exports.TestComplexInvokeCommand = exports.TestInvokeCommand = void 0;
    var TestInvokeCommand = (function (_super) {
        __extends(TestInvokeCommand, _super);
        function TestInvokeCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TestInvokeCommand.prototype.action = function (param) {
            var viewModel = this.owner;
            viewModel.invokeResult = null;
            var promise = viewModel.dbContext.serviceMethods.TestInvoke({ param1: [10, 11, 12, 13, 14], param2: param.Name });
            promise.then(function (res) {
                viewModel.invokeResult = res;
                viewModel.showDialog();
            });
        };
        TestInvokeCommand.prototype.isCanExecute = function (param) {
            var viewModel = this.owner;
            return viewModel.currentItem !== null;
        };
        return TestInvokeCommand;
    }(RIAPP.BaseCommand));
    exports.TestInvokeCommand = TestInvokeCommand;
    var TestComplexInvokeCommand = (function (_super) {
        __extends(TestComplexInvokeCommand, _super);
        function TestComplexInvokeCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TestComplexInvokeCommand.prototype.action = function (param) {
            var viewModel = this.owner;
            viewModel.invokeResult = null;
            var promise = viewModel.dbContext.serviceMethods.TestComplexInvoke({
                info: {
                    AddressId: 1,
                    AddressLine1: "Address #1",
                    City: "City #1",
                    StateProvince: "State #1",
                    CountryRegion: "Россия"
                }, keys: [{
                        key: 1,
                        val: "val1"
                    },
                    {
                        key: 2,
                        val: "val2"
                    },
                    {
                        key: 3,
                        val: "val3"
                    }]
            });
            promise.then(function (res) {
                viewModel.invokeResult = res;
                viewModel.showDialog();
            });
        };
        TestComplexInvokeCommand.prototype.isCanExecute = function (param) {
            var viewModel = this.owner;
            return viewModel.currentItem !== null;
        };
        return TestComplexInvokeCommand;
    }(RIAPP.BaseCommand));
    exports.TestComplexInvokeCommand = TestComplexInvokeCommand;
    var ResetCommand = (function (_super) {
        __extends(ResetCommand, _super);
        function ResetCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ResetCommand.prototype.action = function (param) {
            this.owner.reset();
        };
        ResetCommand.prototype.isCanExecute = function (param) {
            return true;
        };
        return ResetCommand;
    }(RIAPP.BaseCommand));
    exports.ResetCommand = ResetCommand;
});
define("gridDemo/filters", ["require", "exports", "jriapp", "jriapp_db", "demo/demoDB", "gridDemo/commands"], function (require, exports, RIAPP, dbMOD, DEMODB, commands_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductsFilter = void 0;
    var utils = RIAPP.Utils;
    var ProductsFilter = (function (_super) {
        __extends(ProductsFilter, _super);
        function ProductsFilter(app) {
            var _this = _super.call(this) || this;
            var self = _this;
            _this._app = app;
            _this._prodNumber = null;
            _this._name = null;
            _this._parentCategoryId = null;
            _this._childCategoryId = null;
            _this._selectedCategory = null;
            _this._selectedModel = null;
            _this._modelId = null;
            _this._saleStart1 = null;
            _this._saleStart2 = null;
            _this._parentCategories = new dbMOD.DataView({
                dataSource: _this.ProductCategories,
                fn_sort: function (a, b) { return a.ProductCategoryId - b.ProductCategoryId; },
                fn_filter: function (item) { return item.ParentProductCategoryId == null; }
            });
            _this._childCategories = new dbMOD.DataView({
                dataSource: _this.ProductCategories,
                fn_sort: function (a, b) { return a.ProductCategoryId - b.ProductCategoryId; },
                fn_filter: function (item) { return item.ParentProductCategoryId !== null && item.ParentProductCategoryId == self.parentCategoryId; }
            });
            _this._sizes = new DEMODB.KeyValDictionary();
            _this._sizes.fillItems([{ key: 0, val: 'EMPTY' }, { key: 1, val: 'NOT EMPTY' }, { key: 2, val: 'SMALL SIZE' }, { key: 3, val: 'BIG SIZE' }], true);
            _this._size = null;
            _this._resetCommand = new commands_1.ResetCommand(self);
            _this._prodCatDic = new DEMODB.KeyValDictionary();
            _this._prodModDic = new DEMODB.KeyValDictionary();
            _this._prodDescDic = new DEMODB.KeyValDictionary();
            _this._loaded = false;
            return _this;
        }
        ProductsFilter.prototype._loadCategories = function () {
            var query = this.ProductCategories.createReadProductCategoryQuery();
            query.orderBy('Name');
            return query.load();
        };
        ProductsFilter.prototype._loadProductModels = function () {
            var query = this.ProductModels.createReadProductModelQuery();
            query.orderBy('Name');
            return query.load();
        };
        ProductsFilter.prototype._loadClassifiers = function () {
            return this.dbContext.serviceMethods.GetClassifiers();
        };
        ProductsFilter.prototype.load = function () {
            var _this = this;
            var promise1 = this._loadClassifiers().then(function (res) {
                _this._prodCatDic.fillItems(res.prodCategory, true);
                _this._prodModDic.fillItems(res.prodModel, true);
                _this._prodDescDic.fillItems(res.prodDescription, true);
            }), promise2 = this._loadCategories(), promise3 = this._loadProductModels();
            return utils.async.whenAll([promise1, promise2, promise3]).then(function () {
                _this._loaded = true;
                _this.objEvents.raise('loaded', {});
                _this.reset();
            }, function (err) { _this._app.handleError(err, _this); });
        };
        ProductsFilter.prototype.addOnLoaded = function (fn, nmspace) {
            this.objEvents.on('loaded', fn, nmspace);
        };
        ProductsFilter.prototype.reset = function () {
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
        };
        Object.defineProperty(ProductsFilter.prototype, "loaded", {
            get: function () {
                return this._loaded;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "prodCatDic", {
            get: function () { return this._prodCatDic; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "prodModDic", {
            get: function () { return this._prodModDic; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "prodDescDic", {
            get: function () { return this._prodDescDic; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "prodNumber", {
            get: function () { return this._prodNumber; },
            set: function (v) {
                if (this._prodNumber != v) {
                    this._prodNumber = v;
                    this.objEvents.raiseProp('prodNumber');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "name", {
            get: function () { return this._name; },
            set: function (v) {
                if (this._name != v) {
                    this._name = v;
                    this.objEvents.raiseProp('name');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "parentCategoryId", {
            get: function () { return this._parentCategoryId; },
            set: function (v) {
                if (this._parentCategoryId != v) {
                    this._parentCategoryId = v;
                    this.objEvents.raiseProp('parentCategoryId');
                    this._childCategories.refresh();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "childCategoryId", {
            get: function () { return this._childCategoryId; },
            set: function (v) {
                if (this._childCategoryId != v) {
                    this._childCategoryId = v;
                    this.objEvents.raiseProp('childCategoryId');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "modelId", {
            get: function () { return this._modelId; },
            set: function (v) {
                if (this._modelId != v) {
                    this._modelId = v;
                    this.objEvents.raiseProp('modelId');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "saleStart1", {
            get: function () { return this._saleStart1; },
            set: function (v) {
                if (this._saleStart1 != v) {
                    this._saleStart1 = v;
                    this.objEvents.raiseProp('saleStart1');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "saleStart2", {
            get: function () { return this._saleStart2; },
            set: function (v) {
                if (this._saleStart2 != v) {
                    this._saleStart2 = v;
                    this.objEvents.raiseProp('saleStart2');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "dbSets", {
            get: function () { return this.dbContext.dbSets; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "ParentCategories", {
            get: function () { return this._parentCategories; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "ChildCategories", {
            get: function () { return this._childCategories; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "ProductModels", {
            get: function () { return this.dbSets.ProductModel; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "ProductCategories", {
            get: function () { return this.dbSets.ProductCategory; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "resetCommand", {
            get: function () { return this._resetCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "searchTextToolTip", {
            get: function () { return "Use placeholder <span style='font-size: larger'><b>%</b></span><br/> for searching by part of the value"; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "selectedCategory", {
            get: function () { return this._selectedCategory; },
            set: function (v) {
                if (this._selectedCategory != v) {
                    this._selectedCategory = v;
                    this.objEvents.raiseProp('selectedCategory');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "selectedModel", {
            get: function () { return this._selectedModel; },
            set: function (v) {
                if (this._selectedModel != v) {
                    this._selectedModel = v;
                    this.objEvents.raiseProp('selectedModel');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "sizes", {
            get: function () { return this._sizes; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "size", {
            get: function () { return this._size; },
            set: function (v) {
                if (this._size != v) {
                    this._size = v;
                    this.objEvents.raiseProp('size');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "modelData", {
            set: function (data) { this.ProductModels.fillData(data); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "categoryData", {
            set: function (data) { this.ProductCategories.fillData(data); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "dbContext", {
            get: function () { return this._app.dbContext; },
            enumerable: false,
            configurable: true
        });
        ProductsFilter.prototype.toString = function () {
            return "ProductFilter";
        };
        return ProductsFilter;
    }(RIAPP.BaseObject));
    exports.ProductsFilter = ProductsFilter;
});
define("gridDemo/states", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OptionStateProvider = exports.OptionTextProvider = exports.RowStateProvider = void 0;
    var RowStateProvider = (function () {
        function RowStateProvider() {
        }
        RowStateProvider.prototype.getCSS = function (item, val) {
            return (!val) ? 'rowInactive' : null;
        };
        return RowStateProvider;
    }());
    exports.RowStateProvider = RowStateProvider;
    var OptionTextProvider = (function () {
        function OptionTextProvider() {
        }
        OptionTextProvider.prototype.getText = function (item, itemIndex, text) {
            if (itemIndex > 0)
                return itemIndex + ') ' + text;
            else
                return text;
        };
        return OptionTextProvider;
    }());
    exports.OptionTextProvider = OptionTextProvider;
    var OptionStateProvider = (function () {
        function OptionStateProvider() {
        }
        OptionStateProvider.prototype.getCSS = function (item, itemIndex, val) {
            if (itemIndex % 2 == 0)
                return "gray-bgc";
            else
                return "white-bgc";
        };
        return OptionStateProvider;
    }());
    exports.OptionStateProvider = OptionStateProvider;
});
define("gridDemo/productVM", ["require", "exports", "jriapp", "jriapp_db", "jriapp_ui", "common", "gridDemo/filters", "gridDemo/commands", "gridDemo/states"], function (require, exports, jriapp_1, jriapp_db_1, jriapp_ui_1, COMMON, filters_1, commands_2, states_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductViewModel = exports.GridSelectionVM = void 0;
    var utils = jriapp_1.Utils;
    var GridSelectionVM = (function (_super) {
        __extends(GridSelectionVM, _super);
        function GridSelectionVM(viewModel) {
            var _this = _super.call(this, viewModel.app) || this;
            _this._viewModel = viewModel;
            _this._dataGrid = null;
            _this._selected = {};
            _this._selectedCount = 0;
            return _this;
        }
        GridSelectionVM.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            this.clear();
            this.dbSet.objEvents.offNS(this.uniqueID);
            _super.prototype.dispose.call(this);
        };
        GridSelectionVM.prototype._rowSelected = function (item, isSelected) {
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
        };
        GridSelectionVM.prototype._onDataPageChanged = function () {
        };
        GridSelectionVM.prototype._onRowSelected = function (row) {
            this._rowSelected(row.item, row.isSelected);
        };
        GridSelectionVM.prototype._onRowExpanded = function (row) {
            this.viewModel.updateDetailsParent();
        };
        GridSelectionVM.prototype._onRowCollapsed = function (row) {
        };
        GridSelectionVM.prototype._onCellDblClicked = function (cell) {
            alert("You double clicked " + cell.uniqueID);
        };
        GridSelectionVM.prototype._onRowsRefreshed = function () {
            this.updateSelection();
            this.checkRowState();
        };
        GridSelectionVM.prototype._addGrid = function (grid) {
            var self = this;
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
        };
        GridSelectionVM.prototype._removeGrid = function () {
            if (!this._dataGrid)
                return;
            this._dataGrid.objEvents.offNS(this.uniqueID);
            this._dataGrid = null;
        };
        GridSelectionVM.prototype.clear = function () {
            this._selected = {};
            this.selectedCount = 0;
        };
        GridSelectionVM.prototype.updateSelection = function () {
            var self = this, keys = self.selectedIDs, grid = self._dataGrid, dbSet = self.dbSet;
            keys.forEach(function (key) {
                var item = dbSet.getItemByKey(key);
                if (!!item) {
                    var row = grid.findRowByItem(item);
                    if (!!row) {
                        row.isSelected = true;
                    }
                }
            });
        };
        GridSelectionVM.prototype.checkRowState = function () {
            if (!this._dataGrid) {
                return;
            }
            for (var _i = 0, _a = this._dataGrid.rows; _i < _a.length; _i++) {
                var row = _a[_i];
                var item = (row.item);
                var isDisabled = !item.IsActive;
                if (isDisabled) {
                    row.isSelected = false;
                    row.rowSelectorCell.isDisabled = true;
                }
                else {
                    row.rowSelectorCell.isDisabled = false;
                }
            }
        };
        Object.defineProperty(GridSelectionVM.prototype, "currentTemplate", {
            get: function () {
                return this.selectedCount > 0 ? "selectedCountTemplate" : "noneSelectedTemplate";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GridSelectionVM.prototype, "grid", {
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
        Object.defineProperty(GridSelectionVM.prototype, "selectedCount", {
            get: function () { return this._selectedCount; },
            set: function (v) {
                var old = this._selectedCount;
                if (old !== v) {
                    this._selectedCount = v;
                    this.objEvents.raiseProp('selectedCount');
                    this.objEvents.raiseProp('currentTemplate');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GridSelectionVM.prototype, "selectedIDs", {
            get: function () { return Object.keys(this._selected); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GridSelectionVM.prototype, "viewModel", {
            get: function () { return this._viewModel; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GridSelectionVM.prototype, "dbSet", {
            get: function () { return this._viewModel.dbSet; },
            enumerable: false,
            configurable: true
        });
        return GridSelectionVM;
    }(jriapp_1.ViewModel));
    exports.GridSelectionVM = GridSelectionVM;
    var ProductViewModel = (function (_super) {
        __extends(ProductViewModel, _super);
        function ProductViewModel(app) {
            var _this = _super.call(this, app) || this;
            var self = _this;
            _this._filter = new filters_1.ProductsFilter(app);
            _this._dbSet = _this.dbSets.Product;
            _this._propWatcher = new jriapp_1.PropWatcher();
            _this._invokeResult = null;
            _this._rowStateProvider = new states_1.RowStateProvider();
            _this._optionTextProvider = new states_1.OptionTextProvider();
            _this._optionStateProvider = new states_1.OptionStateProvider();
            _this._selectionVM = new GridSelectionVM(_this);
            var sodAssoc = self.dbContext.associations.getSalesOrderDetail_Product();
            _this._vwSalesOrderDet = new jriapp_db_1.ChildDataView({
                association: sodAssoc,
                fn_sort: function (a, b) { return a.SalesOrderDetailId - b.SalesOrderDetailId; }
            });
            _this._dbSet.objEvents.onProp('currentItem', function (_s, data) {
                self._onCurrentChanged();
            }, self.uniqueID);
            _this._dbSet.addOnItemDeleting(function (_s, args) {
                if (!confirm('Are you sure that you want to delete ' + args.item.Name + ' ?'))
                    args.isCancel = true;
            }, self.uniqueID);
            _this._dbSet.addOnCleared(function (_s, _args) {
                _this.dbContext.dbSets.SalesOrderDetail.clear();
            }, self.uniqueID);
            _this._dbSet.addOnEndEdit(function (_s, args) {
                if (!args.isCanceled) {
                    self._testInvokeCommand.raiseCanExecuteChanged();
                }
            }, self.uniqueID);
            _this._dbSet.isSubmitOnDelete = true;
            var validations = [
                {
                    fieldName: null, fn: function (item, errors) {
                        if (!!item.SellEndDate) {
                            if (item.SellEndDate < item.SellStartDate) {
                                errors.push('End Date must be after Start Date');
                            }
                        }
                    }
                },
                {
                    fieldName: "Weight", fn: function (item, errors) {
                        if (item.Weight > 20000) {
                            errors.push('Weight must be less than 20000');
                        }
                    }
                }
            ];
            _this._dbSet.addOnValidateField(function (_s, args) {
                var item = args.item;
                validations.filter(function (val) {
                    return args.fieldName === val.fieldName;
                }).forEach(function (val) {
                    val.fn(item, args.errors);
                });
            }, self.uniqueID);
            _this._dbSet.addOnValidateItem(function (_s, args) {
                var item = args.item;
                validations.filter(function (val) {
                    return !val.fieldName;
                }).forEach(function (val) {
                    var errors = [];
                    val.fn(item, errors);
                    if (errors.length > 0) {
                        args.result.push({ fieldName: null, errors: errors });
                    }
                });
            }, self.uniqueID);
            _this._addNewCommand = new jriapp_1.Command(function () {
                self._dbSet.addNew();
            });
            _this._loadCommand = new jriapp_1.Command(function () {
                self.load();
            });
            _this._testInvokeCommand = new commands_2.TestInvokeCommand(_this);
            _this._testComplexInvokeCommand = new commands_2.TestComplexInvokeCommand(_this);
            _this._columnCommand = new jriapp_1.Command(function (product) {
                alert(utils.str.format("You clicked on \"{0}\", current ProductId is: {1}", "Product Column", (!product ? "Not selected" : product.ProductId)));
            }, function () {
                return !!self.currentItem;
            });
            _this._propWatcher.addWatch(self, ['currentItem'], function (property) {
                self._testInvokeCommand.raiseCanExecuteChanged();
                self._testComplexInvokeCommand.raiseCanExecuteChanged();
            });
            _this._dialogVM = new jriapp_ui_1.DialogVM(app);
            var dialogOptions = {
                templateID: 'invokeResultTemplate',
                width: 500,
                height: 275,
                canCancel: false,
                title: 'Result of a service method invocation',
                fn_OnClose: function (_dialog) {
                    self.invokeResult = null;
                }
            };
            _this._dialogVM.createDialog('testDialog', dialogOptions);
            return _this;
        }
        ProductViewModel.prototype.addTabs = function (tabs) {
            console.log('tabs created');
        };
        ProductViewModel.prototype.removeTabs = function () {
            console.log('tabs destroyed');
        };
        ProductViewModel.prototype.onTabSelected = function (tabs) {
            console.log('tab selected: ' + tabs.tabIndex);
        };
        ProductViewModel.prototype._onCurrentChanged = function () {
            this.objEvents.raiseProp('currentItem');
            this._columnCommand.raiseCanExecuteChanged();
        };
        ProductViewModel.prototype.updateDetailsParent = function () {
            this.vwSalesOrderDet.parentItem = this.currentItem;
        };
        ProductViewModel.prototype.load = function () {
            this._selectionVM.clear();
            var query = this.dbSet.createReadProductQuery({ param1: [10, 11, 12, 13, 14], param2: 'Test' });
            query.pageSize = 50;
            COMMON.addTextQuery(query, 'ProductNumber', this._filter.prodNumber);
            COMMON.addTextQuery(query, 'Name', this._filter.name);
            if (!utils.check.isNt(this._filter.childCategoryId)) {
                query.where('ProductCategoryId', 0, [this._filter.childCategoryId]);
            }
            if (utils.check.isArray(this._filter.modelId) && this._filter.modelId.length > 0) {
                query.where('ProductModelId', 0, this._filter.modelId.map(function (v) { return v == -1 ? null : v; }));
            }
            if (!utils.check.isNt(this._filter.saleStart1) && !utils.check.isNt(this._filter.saleStart2)) {
                query.where('SellStartDate', 1, [this._filter.saleStart1, this._filter.saleStart2]);
            }
            else if (!utils.check.isNt(this._filter.saleStart1)) {
                query.where('SellStartDate', 7, [this._filter.saleStart1]);
            }
            else if (!utils.check.isNt(this._filter.saleStart2)) {
                query.where('SellStartDate', 8, [this._filter.saleStart2]);
            }
            switch (this.filter.size) {
                case 0:
                    query.where('Size', 0, [null]);
                    break;
                case 1:
                    query.where('Size', 9, [null]);
                    break;
                case 2:
                    query.where('Size', 2, ['S']);
                    break;
                case 3:
                    query.where('Size', 2, ['X']);
                    break;
                default:
                    break;
            }
            query.orderBy('Name').thenBy('SellStartDate', 1);
            return query.load();
        };
        ProductViewModel.prototype.showDialog = function (name) {
            this._dialogVM.showDialog(name || 'testDialog', this);
        };
        ProductViewModel.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            this._propWatcher.dispose();
            this._dbSet.objEvents.offNS(this.uniqueID);
            this._selectionVM.dispose();
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(ProductViewModel.prototype, "dbSet", {
            get: function () { return this._dbSet; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "testInvokeCommand", {
            get: function () { return this._testInvokeCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "testComplexInvokeCommand", {
            get: function () { return this._testComplexInvokeCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "addNewCommand", {
            get: function () { return this._addNewCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "dbContext", {
            get: function () { return this.app.dbContext; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "dbSets", {
            get: function () { return this.dbContext.dbSets; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "currentItem", {
            get: function () { return this._dbSet.currentItem; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "filter", {
            get: function () { return this._filter; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "loadCommand", {
            get: function () { return this._loadCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "columnCommand", {
            get: function () { return this._columnCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "selectionVM", {
            get: function () { return this._selectionVM; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "invokeResult", {
            get: function () { return this._invokeResult; },
            set: function (v) {
                var old = this._invokeResult;
                if (old !== v) {
                    this._invokeResult = v;
                    this.objEvents.raiseProp('invokeResult');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "vwSalesOrderDet", {
            get: function () { return this._vwSalesOrderDet; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "rowStateProvider", {
            get: function () { return this._rowStateProvider; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "optionTextProvider", {
            get: function () { return this._optionTextProvider; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "optionStateProvider", {
            get: function () { return this._optionStateProvider; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "tabsEvents", {
            get: function () { return this; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "dialogOptions", {
            get: function () {
                var dialogOptions = {
                    templateID: 'productEditTemplate',
                    width: 950,
                    height: 600,
                    title: 'Edit Product',
                    submitOnOK: true,
                    fn_OnOpen: function (dialog) {
                        var focusEdit = dialog.template.el.querySelector('span.focus-on-open input[type="text"]');
                        if (!!focusEdit) {
                            focusEdit.focus();
                        }
                        console.log("edit dialog is opened");
                    },
                    fn_OnShow: function (_dialog) {
                        console.log("edit dialog is shown");
                    },
                    fn_OnClose: function (_dialog) {
                        console.log("edit dialog is closed");
                    },
                    fn_OnOK: function (_dialog) {
                        console.log("edit dialog: OK clicked");
                        return 0;
                    }
                };
                return dialogOptions;
            },
            enumerable: false,
            configurable: true
        });
        ProductViewModel.prototype.toString = function () {
            return "ProductVM";
        };
        return ProductViewModel;
    }(jriapp_1.ViewModel));
    exports.ProductViewModel = ProductViewModel;
});
define("gridDemo/baseUpload", ["require", "exports", "jriapp", "jriapp_ui", "uploader", "uploader"], function (require, exports, RIAPP, uiMOD, uploader_1, uploader_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseUploadVM = exports.Uploader = void 0;
    Object.defineProperty(exports, "Uploader", { enumerable: true, get: function () { return uploader_2.Uploader; } });
    var utils = RIAPP.Utils, $ = uiMOD.$;
    function fn_getTemplateElement(template, name) {
        var t = template, els = t.findElByDataName(name);
        if (els.length < 1) {
            return null;
        }
        return els[0];
    }
    var BaseUploadVM = (function (_super) {
        __extends(BaseUploadVM, _super);
        function BaseUploadVM(app, url) {
            var _this = _super.call(this, app) || this;
            var self = _this;
            _this._uploadUrl = url;
            _this._formEl = null;
            _this._fileEl = null;
            _this._progressBar = null;
            _this._percentageCalc = null;
            _this._progressDiv = null;
            _this._fileInfo = null;
            _this._id = null;
            _this._fileUploaded = false;
            _this._uploadCommand = new RIAPP.Command(function () {
                try {
                    self.uploadFiles(self._fileEl.files);
                }
                catch (ex) {
                    self.handleError(ex, _this);
                }
            }, function () {
                return self._canUpload();
            });
            return _this;
        }
        BaseUploadVM.prototype._initUI = function () {
            var self = this;
            self.formEl.reset();
            self.fileInfo = null;
            self.fileName = null;
            self._fileUploaded = false;
        };
        BaseUploadVM.prototype._onProgress = function (val) {
            var self = this;
            self._progressBar.prop("max", 100);
            self._progressBar.prop("value", Math.floor(val * 100));
            self._percentageCalc.html(Math.floor(val * 100) + "%");
        };
        BaseUploadVM.prototype._onLoadStart = function () {
            var self = this;
            self._progressBar.prop("max", 100);
            self._progressBar.prop("value", 0);
            self._percentageCalc.html("0%");
            self._progressDiv.show();
        };
        BaseUploadVM.prototype._onLoadComplete = function () {
            var self = this;
            self.fileInfo = 'File uploaded';
            self._progressDiv.hide();
            self._onFileUploaded();
        };
        BaseUploadVM.prototype._onLoadError = function () {
            var self = this;
            self.fileInfo = 'Upload Error!';
            self._progressDiv.hide();
            self.handleError(new Error(utils.str.format("File upload error: {0}", 'Upload Error')), self);
        };
        BaseUploadVM.prototype._onFileUploaded = function () {
            this._fileUploaded = true;
        };
        BaseUploadVM.prototype._addHeaders = function (xhr, file) {
            xhr.setRequestHeader("X-Data-Id", this.id);
            return utils.async.resolve();
        };
        BaseUploadVM.prototype._onIdChanged = function () {
            this._uploadCommand.raiseCanExecuteChanged();
        };
        BaseUploadVM.prototype._canUpload = function () {
            return !!this._fileInfo;
        };
        BaseUploadVM.prototype._getDataId = function () {
            return this.id;
        };
        BaseUploadVM.prototype._prepareTemplate = function (template, isLoaded) {
            var self = this;
            try {
                var t = template, templEl = t.el;
                if (isLoaded) {
                    self._onTemplateCreated(template);
                }
                else {
                    var fileEl = $(fn_getTemplateElement(template, 'files-to-upload'));
                    fileEl.off('change');
                    $('*[data-name="btn-input"]', templEl).off('click');
                }
            }
            catch (ex) {
                self.handleError(ex, this);
            }
        };
        BaseUploadVM.prototype._onTemplateCreated = function (template) {
            var self = this;
            self._fileEl = fn_getTemplateElement(template, 'files-to-upload');
            self._formEl = fn_getTemplateElement(template, 'uploadForm');
            self._progressBar = $(fn_getTemplateElement(template, 'progressBar'));
            self._percentageCalc = $(fn_getTemplateElement(template, 'percentageCalc'));
            self._progressDiv = $(fn_getTemplateElement(template, 'progressDiv'));
            self._progressDiv.hide();
            $(self._fileEl).on('change', function (e) {
                var fileEl = this;
                e.stopPropagation();
                var fileList = fileEl.files;
                self.fileInfo = null;
                var txt = '';
                for (var i = 0, l = fileList.length; i < l; i++) {
                    txt += utils.str.format('<p>{0} ({1} KB)</p>', fileList[i].name, utils.str.formatNumber(fileList[i].size / 1024, 2, '.', ','));
                }
                self.fileInfo = txt;
                self.fileName = fileList.length > 0 ? fileList[0].name : null;
            });
            var templEl = template.el, $fileEl = $(self._fileEl);
            $fileEl.change(function (e) {
                $('input[data-name="files-input"]', templEl).val($(this).val());
            });
            $('*[data-name="btn-input"]', templEl).click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                $fileEl.click();
            });
        };
        BaseUploadVM.prototype.uploadFiles = function (fileList) {
            var _this = this;
            var list = utils.arr.fromList(fileList);
            var funcs = list.map(function (file, i) { return function () { return _this.uploadFile(file); }; });
            return utils.async.promiseSerial(funcs);
        };
        BaseUploadVM.prototype.uploadFile = function (file) {
            var self = this, uploader = new uploader_1.Uploader(this._uploadUrl, file);
            self._onLoadStart();
            uploader.addOnProgress(function (s, val) {
                self._onProgress(val);
            });
            uploader.addOnAddHeaders(function (s, args) {
                args.promise = self._addHeaders(args.xhr, file);
            });
            var res = uploader.uploadFile().then(function (fileName) {
                uploader.dispose();
                self._onLoadComplete();
                return fileName;
            });
            res.catch(function (err) {
                uploader.dispose();
                self._onLoadError();
            });
            return res;
        };
        Object.defineProperty(BaseUploadVM.prototype, "uploadUrl", {
            get: function () { return this._uploadUrl; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "fileUploaded", {
            get: function () { return this._fileUploaded; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "formEl", {
            get: function () { return this._formEl; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "fileInfo", {
            get: function () { return this._fileInfo; },
            set: function (v) {
                if (this._fileInfo !== v) {
                    this._fileInfo = v;
                    this.objEvents.raiseProp('fileInfo');
                    this._uploadCommand.raiseCanExecuteChanged();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "fileName", {
            get: function () { return this._fileName; },
            set: function (v) {
                if (this._fileName !== v) {
                    this._fileName = v;
                    this.objEvents.raiseProp('fileName');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "uploadCommand", {
            get: function () { return this._uploadCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "id", {
            get: function () { return this._id; },
            set: function (v) {
                var old = this._id;
                if (old !== v) {
                    this._id = v;
                    this.objEvents.raiseProp('id');
                    this._onIdChanged();
                }
            },
            enumerable: false,
            configurable: true
        });
        BaseUploadVM.prototype.beginEdit = function () {
            return true;
        };
        BaseUploadVM.prototype.endEdit = function () {
            return true;
        };
        BaseUploadVM.prototype.cancelEdit = function () {
            return true;
        };
        Object.defineProperty(BaseUploadVM.prototype, "isEditing", {
            get: function () {
                return true;
            },
            enumerable: false,
            configurable: true
        });
        return BaseUploadVM;
    }(RIAPP.ViewModel));
    exports.BaseUploadVM = BaseUploadVM;
});
define("gridDemo/uploads", ["require", "exports", "jriapp", "jriapp_ui", "common", "gridDemo/baseUpload"], function (require, exports, RIAPP, uiMOD, COMMON, baseUpload_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UploadThumbnailVM = void 0;
    var UploadThumbnailVM = (function (_super) {
        __extends(UploadThumbnailVM, _super);
        function UploadThumbnailVM(app, url) {
            var _this = _super.call(this, app, url) || this;
            var self = _this;
            _this._product = null;
            _this._dialogVM = new uiMOD.DialogVM(app);
            var dialogOptions = {
                templateID: 'uploadTemplate',
                width: 550,
                height: 300,
                title: 'Upload Product Thumbnail',
                fn_OnTemplateCreated: function (template) {
                    self._prepareTemplate(template, true);
                },
                fn_OnShow: function (dialog) {
                    self._initUI();
                },
                fn_OnClose: function (dialog) {
                    if (dialog.result == 'ok' && self._onDialogClose()) {
                        self.objEvents.raise('files_uploaded', { id: self.id, product: self._product });
                    }
                }
            };
            _this._dialogVM.createDialog('uploadDialog', dialogOptions);
            _this._dialogCommand = new RIAPP.Command(function (product) {
                try {
                    self._product = product;
                    self.id = self._product.ProductId.toString();
                    self._dialogVM.showDialog('uploadDialog', self);
                }
                catch (ex) {
                    self.handleError(ex, self);
                }
            });
            return _this;
        }
        UploadThumbnailVM.prototype._onDialogClose = function () {
            return this.fileUploaded;
        };
        UploadThumbnailVM.prototype._addHeaders = function (xhr, file) {
            var res = _super.prototype._addHeaders.call(this, xhr, file);
            xhr.setRequestHeader('RequestVerificationToken', COMMON.getAntiForgeryToken());
            return res;
        };
        UploadThumbnailVM.prototype.endEdit = function () {
            return this._onDialogClose();
        };
        UploadThumbnailVM.prototype.addOnFilesUploaded = function (fn, nmspace) {
            this.objEvents.on('files_uploaded', fn, nmspace);
        };
        UploadThumbnailVM.prototype.offOnFilesUploaded = function (nmspace) {
            this.objEvents.off('files_uploaded', nmspace);
        };
        Object.defineProperty(UploadThumbnailVM.prototype, "dialogCommand", {
            get: function () {
                return this._dialogCommand;
            },
            enumerable: false,
            configurable: true
        });
        UploadThumbnailVM.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            this._dialogVM.dispose();
            this._dialogVM = null;
            _super.prototype.dispose.call(this);
        };
        return UploadThumbnailVM;
    }(baseUpload_1.BaseUploadVM));
    exports.UploadThumbnailVM = UploadThumbnailVM;
});
define("gridDemo/app", ["require", "exports", "jriapp", "demo/demoDB", "common", "header", "gridDemo/productVM", "gridDemo/uploads"], function (require, exports, RIAPP, DEMODB, COMMON, HEADER, productVM_1, uploads_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DemoApplication = void 0;
    var DemoApplication = (function (_super) {
        __extends(DemoApplication, _super);
        function DemoApplication(options) {
            var _this = _super.call(this, options) || this;
            _this._dbContext = null;
            _this._errorVM = null;
            _this._headerVM = null;
            _this._productVM = null;
            _this._uploadVM = null;
            _this._hubConnection = null;
            _this._hubStarted = false;
            _this._signalrPromise = null;
            var self = _this;
            _this._openHubCommand = new RIAPP.Command(function () {
                self._initSignalR().then(function () {
                    _this._hubConnection.on("OnNewQuote", function (data) {
                        self._onNewQuote(data);
                    });
                    _this._hubConnection.start().then(function () {
                        self._hubStarted = true;
                        setTimeout(function () {
                            self._closeHubCommand.raiseCanExecuteChanged();
                            self._openHubCommand.raiseCanExecuteChanged();
                        }, 0);
                        self._hubConnection.send('SendMyQuote', "My own quote of the day");
                    }).catch(function (res) {
                        self.handleError(res, self);
                    });
                }).catch(function (res) {
                    self.handleError(res, self);
                });
            }, function () {
                return !!options.sse_url && !_this._hubStarted;
            });
            _this._closeHubCommand = new RIAPP.Command(function () {
                _this._hubConnection.stop().catch(function (res) {
                    self.handleError(res, self);
                });
                _this._hubConnection.off("OnNewQuote");
            }, function () {
                return !!_this._hubConnection && !!_this._hubStarted;
            });
            return _this;
        }
        DemoApplication.prototype.onStartUp = function () {
            var self = this, options = self.options;
            this._dbContext = new DEMODB.DbContext();
            this._dbContext.addOnDbSetCreating(function (s, a) {
            });
            this._dbContext.initialize({ serviceUrl: options.service_url, permissions: options.permissionInfo });
            this._dbContext.dbSets.Product.defineIsActiveField(function (item) {
                return !item.SellEndDate;
            });
            this._errorVM = new COMMON.ErrorViewModel(this);
            this._headerVM = new HEADER.HeaderVM(this);
            this._productVM = new productVM_1.ProductViewModel(this);
            this._uploadVM = new uploads_1.UploadThumbnailVM(this, options.upload_thumb_url);
            function handleError(sender, data) {
                self._handleError(sender, data);
            }
            ;
            this.objEvents.addOnError(handleError);
            this._dbContext.objEvents.addOnError(handleError);
            this._dbContext.requestHeaders['RequestVerificationToken'] = COMMON.getAntiForgeryToken();
            this._uploadVM.addOnFilesUploaded(function (s, a) {
                a.product._aspect.refresh();
            });
            var filter = this._productVM.filter;
            filter.addOnLoaded(function () {
                console.log("filter data is loaded, filter.prodCatDic.count: " + filter.prodCatDic.count);
            });
            _super.prototype.onStartUp.call(this);
        };
        DemoApplication.prototype._initSignalR = function () {
            var _this = this;
            var self = this, options = self.options;
            if (!!self._signalrPromise)
                return self._signalrPromise;
            var deferred = RIAPP.Utils.async.createDeferred();
            if (!options.sse_url) {
                deferred.reject();
                return deferred.promise();
            }
            self._signalrPromise = deferred.promise();
            require(['signalr'], function (signalr) {
                try {
                    var hubBuilder = new signalr.HubConnectionBuilder();
                    _this._hubConnection = hubBuilder
                        .withUrl(options.sse_url)
                        .configureLogging(signalr.LogLevel.Information)
                        .build();
                    _this._hubConnection.onclose(function (error) {
                        if (self.getIsStateDirty())
                            return;
                        self._hubStarted = false;
                        self._closeHubCommand.raiseCanExecuteChanged();
                        self._openHubCommand.raiseCanExecuteChanged();
                        if (!!error)
                            self.handleError(error, self);
                    });
                    self._closeHubCommand.raiseCanExecuteChanged();
                    self._openHubCommand.raiseCanExecuteChanged();
                    deferred.resolve();
                }
                catch (err) {
                    deferred.reject(err);
                }
            }, function (err) {
                deferred.reject(err);
            });
            return self._signalrPromise;
        };
        DemoApplication.prototype._handleError = function (sender, data) {
            debugger;
            data.isHandled = true;
            this.errorVM.error = data.error;
            this.errorVM.showDialog();
        };
        DemoApplication.prototype._onNewQuote = function (quote) {
            this._sseMessage = quote;
            this.objEvents.raiseProp('sseMessage');
        };
        DemoApplication.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            var self = this;
            try {
                self._errorVM.dispose();
                self._headerVM.dispose();
                self._productVM.dispose();
                self._uploadVM.dispose();
                self._dbContext.dispose();
                if (!!self._hubConnection && self._hubStarted) {
                    self._hubConnection.stop();
                }
                self._hubConnection = null;
                self._signalrPromise = null;
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
        Object.defineProperty(DemoApplication.prototype, "headerVM", {
            get: function () { return this._headerVM; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "productVM", {
            get: function () { return this._productVM; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "uploadVM", {
            get: function () { return this._uploadVM; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "sseMessage", {
            get: function () { return this._sseMessage; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "hubConnection", {
            get: function () { return this._hubConnection; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "openHubCommand", {
            get: function () { return this._openHubCommand; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "closeHubCommand", {
            get: function () { return this._closeHubCommand; },
            enumerable: false,
            configurable: true
        });
        return DemoApplication;
    }(RIAPP.Application));
    exports.DemoApplication = DemoApplication;
});
define("gridDemo/resizableGrid", ["require", "exports", "jriapp", "jriapp_ui"], function (require, exports, RIAPP, uiMOD) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initModule = exports.ResizableGrid = void 0;
    var utils = RIAPP.Utils, DOM = RIAPP.DOM, doc = RIAPP.DOM.document, head = RIAPP.DOM.queryOne(doc, "head");
    var drag = null;
    var forEach = RIAPP.Utils.core.forEach;
    var PX = "px";
    var SIGNATURE = "JColResizer";
    var FLEX = "JCLRFlex";
    var _gridsCount = 0, _created_grids = {};
    function _gridCreated(grid) {
        _created_grids[grid.uniqueID] = grid;
        _gridsCount += 1;
        if (_gridsCount === 1) {
            DOM.events.on(window, 'resize', onResize, SIGNATURE);
        }
    }
    function _gridDestroyed(grid) {
        delete _created_grids[grid.uniqueID];
        _gridsCount -= 1;
        if (_gridsCount === 0) {
            DOM.events.offNS(window, SIGNATURE);
        }
    }
    var cssRules = "<style type='text/css'>  .JColResizer{table-layout:fixed; box-sizing: border-box;} .JCLRgrips{ height:0px; position:relative; box-sizing: border-box;} .JCLRgrip{margin-left:-5px; position:absolute; z-index:5; box-sizing: border-box;} .JCLRgrip .JColResizer{position:absolute;background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;height:100%;cursor: e-resize;top:0px; box-sizing: border-box;} .JCLRLastGrip{position:absolute; width:1px; box-sizing: border-box; } .JCLRgripDrag{ border-left:1px dotted black; box-sizing: border-box; } .JCLRFlex{ width:auto!important; } .JCLRgrip.JCLRdisabledGrip .JColResizer{cursor:default; display:none;}</style>";
    DOM.append(head, RIAPP.DOM.fromHTML(cssRules));
    var onGripDrag = function (e) {
        if (!drag)
            return false;
        var gripData = DOM.getData(drag, SIGNATURE), elview = gripData.elview;
        if (elview.getIsStateDirty())
            return false;
        var data = elview.getResizeIfo();
        var table = elview.grid.table;
        var touches = e.touches;
        var ox = touches ? touches[0].pageX : e.pageX;
        var x = ox - gripData.ox + gripData.l;
        var mw = data.options.minWidth;
        var index = gripData.i;
        var colInfo = data.columns[index];
        var minLen = data.cellspacing * 1.5 + mw;
        var last = index == data.len - 1;
        var min = (index > 0) ? data.columns[index - 1].grip.offsetLeft + data.cellspacing + mw : minLen;
        var max = Infinity;
        if (data.fixed) {
            if (last) {
                max = data.w - minLen;
            }
            else {
                max = data.columns[index + 1].grip.offsetLeft - data.cellspacing - mw;
            }
        }
        x = Math.max(min, Math.min(max, x));
        gripData.x = x;
        drag.style.left = (x + PX);
        if (last) {
            gripData.w = colInfo.w + x - gripData.l;
        }
        if (!!data.options.liveDrag) {
            if (last) {
                colInfo.column.style.width = (gripData.w + PX);
                if (!data.fixed) {
                    table.style.minWidth = ((data.w + x - gripData.l) + PX);
                }
                else {
                    data.w = table.offsetWidth;
                }
            }
            else {
                elview.syncCols(index, false);
            }
            elview.syncGrips();
            var cb = data.options.onDrag;
            if (!!cb) {
                e.currentTarget = table;
                cb(e);
            }
        }
        return false;
    };
    var onGripDragOver = function (e) {
        DOM.events.offNS(doc, SIGNATURE);
        var dragCursor = RIAPP.DOM.queryOne(head, '#dragCursor');
        if (!!dragCursor) {
            DOM.removeNode(dragCursor);
        }
        if (!drag)
            return;
        var gripData = DOM.getData(drag, SIGNATURE);
        var elview = gripData.elview;
        if (elview.getIsStateDirty())
            return;
        var data = elview.getResizeIfo(), table = elview.grid.table;
        DOM.removeClass([drag], data.options.draggingClass);
        if (!!(gripData.x - gripData.l)) {
            var cb = data.options.onResize;
            var index = gripData.i;
            var last = index == data.len - 1;
            var colInfo = data.columns[index];
            if (last) {
                colInfo.column.style.width = (gripData.w + PX);
                colInfo.w = gripData.w;
            }
            else {
                elview.syncCols(index, true);
            }
            if (!data.fixed)
                elview.applyBounds();
            elview.syncGrips();
            if (!!cb) {
                e.currentTarget = table;
                cb(e);
            }
        }
        drag = null;
    };
    var onGripMouseDown = function (e) {
        var grip = this;
        var gripData = DOM.getData(grip, SIGNATURE), elview = gripData.elview;
        if (elview.getIsStateDirty())
            return false;
        var data = elview.getResizeIfo();
        var touches = e.touches;
        gripData.ox = touches ? touches[0].pageX : e.pageX;
        gripData.l = grip.offsetLeft;
        gripData.x = gripData.l;
        DOM.events.on(doc, 'touchmove', onGripDrag, SIGNATURE);
        DOM.events.on(doc, 'mousemove', onGripDrag, SIGNATURE);
        DOM.events.on(doc, 'touchend', onGripDragOver, SIGNATURE);
        DOM.events.on(doc, 'mouseup', onGripDragOver, SIGNATURE);
        var dragCursor = DOM.queryOne(head, '#dragCursor');
        if (!dragCursor) {
            var html = "<style id='dragCursor' type='text/css'>*{cursor: " + data.options.dragCursor + " !important}</style>";
            DOM.append(head, DOM.fromHTML(html));
        }
        DOM.addClass([grip], data.options.draggingClass);
        drag = grip;
        var gripCol = data.columns[gripData.i];
        if (gripCol.locked) {
            for (var i = 0; i < data.len; i++) {
                var c = data.columns[i];
                c.locked = false;
                c.w = c.column.offsetWidth;
            }
        }
        return false;
    };
    var onResize = function () {
        forEach(_created_grids, function (_, gridView) {
            gridView.syncGrips();
        });
    };
    var ResizableGrid = (function (_super) {
        __extends(ResizableGrid, _super);
        function ResizableGrid(el, options) {
            var _this = _super.call(this, el, options) || this;
            var self = _this, grid = self.grid;
            _gridCreated(_this);
            var defaults = {
                resizeMode: 'overflow',
                draggingClass: 'JCLRgripDrag',
                gripInnerHtml: '',
                liveDrag: false,
                minWidth: 15,
                headerOnly: true,
                dragCursor: "e-resize",
                marginLeft: null,
                marginRight: null,
                disabledColumns: [],
                onDrag: null,
                onResize: null
            };
            _this._resizeInfo = null;
            _this._ds = grid.dataSource;
            var opts = utils.core.extend(defaults, options);
            self.init(opts);
            self.bindDS(_this._ds);
            grid.objEvents.onProp("dataSource", function (s, a) {
                self.unBindDS(self._ds);
                self.bindDS(grid.dataSource);
                self._ds = grid.dataSource;
            }, _this.uniqueID);
            self.syncGrips();
            return _this;
        }
        ResizableGrid.prototype.bindDS = function (ds) {
            if (!ds)
                return;
            var self = this;
            ds.addOnCleared(function (s, a) {
                utils.queue.enque(function () { self.syncGrips(); });
            }, this.uniqueID);
            ds.addOnFill(function (s, a) {
                utils.queue.enque(function () { self.syncGrips(); });
            }, this.uniqueID);
        };
        ResizableGrid.prototype.unBindDS = function (ds) {
            if (!ds)
                return;
            ds.objEvents.offNS(this.uniqueID);
        };
        ResizableGrid.prototype.init = function (options) {
            var table = this.grid.table, style = window.getComputedStyle(table, null);
            DOM.addClass([table], SIGNATURE);
            var gripContainer = DOM.fromHTML('<div class="JCLRgrips"/>')[0];
            var header = this.grid._getInternal().getHeader();
            header.parentElement.insertBefore(gripContainer, header);
            this._resizeInfo = {
                options: options,
                mode: options.resizeMode,
                dc: options.disabledColumns,
                fixed: options.resizeMode === 'fit',
                columns: [],
                w: table.offsetWidth,
                gripContainer: gripContainer,
                cellspacing: parseInt(style.borderSpacing) || 2,
                len: 0
            };
            if (options.marginLeft)
                gripContainer.style.marginLeft = options.marginLeft;
            if (options.marginRight)
                gripContainer.style.marginRight = options.marginRight;
            this.createGrips();
        };
        ResizableGrid.prototype.createGrips = function () {
            var table = this.grid.table, self = this;
            var allTH = this.grid._tHeadCells;
            var data = this._resizeInfo;
            data.len = allTH.length;
            allTH.forEach(function (column, index) {
                var isDisabled = data.dc.indexOf(index) != -1;
                var grip = DOM.fromHTML('<div class="JCLRgrip"></div>')[0];
                data.gripContainer.appendChild(grip);
                if (!isDisabled && !!data.options.gripInnerHtml) {
                    var inner = DOM.fromHTML(data.options.gripInnerHtml);
                    DOM.append(grip, inner);
                }
                DOM.append(grip, RIAPP.DOM.fromHTML('<div class="' + SIGNATURE + '"></div>'));
                if (index == data.len - 1) {
                    DOM.addClass([grip], "JCLRLastGrip");
                    if (data.fixed)
                        grip.innerHTML = "";
                }
                if (!isDisabled) {
                    DOM.removeClass([grip], 'JCLRdisabledGrip');
                    DOM.events.on(grip, 'touchstart', onGripMouseDown);
                    DOM.events.on(grip, 'mousedown', onGripMouseDown);
                }
                else {
                    DOM.addClass([grip], 'JCLRdisabledGrip');
                }
                var colInfo = { column: column, grip: grip, w: column.offsetWidth, locked: false };
                data.columns.push(colInfo);
                column.style.width = (colInfo.w + PX);
                column.removeAttribute("width");
                var gripData = { i: index, elview: self, last: index == data.len - 1, ox: 0, x: 0, l: 0, w: 0 };
                DOM.setData(grip, SIGNATURE, gripData);
            });
            if (!data.fixed) {
                table.removeAttribute('width');
                DOM.addClass([table], FLEX);
            }
            this.syncGrips();
        };
        ResizableGrid.prototype.syncGrips = function () {
            if (this.getIsStateDirty())
                return;
            var data = this._resizeInfo;
            data.gripContainer.style.width = (data.w + PX);
            var table = this.grid.table;
            var header = this.grid._getInternal().getHeader();
            var viewport = this.grid._getInternal().getWrapper();
            var headerHeight = header.offsetHeight;
            var tableHeight = viewport.clientHeight;
            var lastGripOffset = 5;
            for (var i = 0; i < data.len; i++) {
                var colInfo = data.columns[i], leftPos = (colInfo.column.offsetLeft - table.offsetLeft + colInfo.column.offsetWidth + data.cellspacing / 2);
                if (i == data.len - 1) {
                    if ((leftPos + lastGripOffset) > data.w) {
                        leftPos = data.w - lastGripOffset;
                    }
                }
                colInfo.grip.style.left = (leftPos + PX);
                colInfo.grip.style.height = ((data.options.headerOnly ? headerHeight : (headerHeight + tableHeight)) + PX);
            }
            this.grid.updateColumnsSize();
        };
        ResizableGrid.prototype.syncCols = function (i, isOver) {
            if (this.getIsStateDirty())
                return;
            var table = this.grid.table, data = this._resizeInfo, gripData = DOM.getData(drag, SIGNATURE);
            var inc = gripData.x - gripData.l, c = data.columns[i];
            if (data.fixed) {
                var c2 = data.columns[i + 1];
                var w2 = c2.w - inc;
                c2.column.style.width = (w2 + PX);
                if (isOver) {
                    c2.w = c2.column.offsetWidth;
                }
            }
            else {
                table.style.minWidth = ((data.w + inc) + PX);
            }
            var w = c.w + inc;
            c.column.style.width = (w + PX);
            if (isOver) {
                c.w = c.column.offsetWidth;
            }
        };
        ResizableGrid.prototype.applyBounds = function () {
            if (this.getIsStateDirty())
                return;
            var table = this.grid.table;
            var data = this._resizeInfo;
            var widths = data.columns.map(function (c) {
                return c.column.offsetWidth;
            });
            data.w = table.offsetWidth;
            table.style.width = (data.w + PX);
            DOM.removeClass([table], FLEX);
            data.columns.forEach(function (c, i) {
                c.column.style.width = (widths[i] + PX);
            });
            DOM.addClass([table], FLEX);
            data.columns.forEach(function (c, i) {
                c.w = c.column.offsetWidth;
            });
            data.w = table.offsetWidth;
            var viewport = this.grid._getInternal().getWrapper();
            viewport.style.width = (table.offsetWidth + (viewport.offsetWidth - viewport.clientWidth)) + PX;
        };
        ResizableGrid.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            _gridDestroyed(this);
            this.unBindDS(this._ds);
            this._ds = null;
            var table = this.grid.table, data = this._resizeInfo;
            if (!!data)
                data.gripContainer.remove();
            DOM.removeClass([table], SIGNATURE + " " + FLEX);
            this._resizeInfo = null;
            _super.prototype.dispose.call(this);
        };
        ResizableGrid.prototype.getResizeIfo = function () {
            return this._resizeInfo;
        };
        return ResizableGrid;
    }(uiMOD.DataGridElView));
    exports.ResizableGrid = ResizableGrid;
    function initModule(app) {
        app.registerElView('resizable_grid', ResizableGrid);
    }
    exports.initModule = initModule;
});
define("gridDemo/main", ["require", "exports", "jriapp", "common", "expander", "dropdownbox", "gridDemo/app", "gridDemo/resizableGrid"], function (require, exports, RIAPP, COMMON, EXPANDER, DROPDBOX, app_1, ResizableGrid) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.start = exports.SizeConverter = void 0;
    var bootstrap = RIAPP.bootstrapper, utils = RIAPP.Utils;
    var styles = ["lsize", 'msize', 'ssize', 'nsize'];
    var SizeConverter = (function (_super) {
        __extends(SizeConverter, _super);
        function SizeConverter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SizeConverter.prototype.convertToSource = function (val, param, dataContext) {
            return undefined;
        };
        SizeConverter.prototype.convertToTarget = function (val, param, dataContext) {
            var size = "" + val, firstLetter;
            var res = undefined, found = false;
            if (!!val) {
                if (utils.check.isNumeric(size))
                    firstLetter = 'n';
                else
                    firstLetter = size.charAt(0).toLowerCase();
            }
            res = styles.map(function (style) {
                if (!found && !!firstLetter && utils.str.startsWith(style, firstLetter)) {
                    found = true;
                    return "+" + style;
                }
                else {
                    return "-" + style;
                }
            });
            return res;
        };
        return SizeConverter;
    }(RIAPP.BaseConverter));
    exports.SizeConverter = SizeConverter;
    bootstrap.objEvents.addOnError(function (_s, args) {
        debugger;
        alert(args.error.message);
        args.isHandled = true;
    });
    function start(options) {
        options.modulesInits = {
            "COMMON": COMMON.initModule,
            "ResizableGrid": ResizableGrid.initModule,
            "EXPANDER": EXPANDER.initModule,
            "DROPDBOX": DROPDBOX.initModule
        };
        bootstrap.init(function (bootstrap) {
            var ButtonsCSS = bootstrap.defaults.ButtonsCSS;
            ButtonsCSS.Edit = 'fas fa-edit';
            ButtonsCSS.Delete = 'fas fa-trash-alt';
            ButtonsCSS.OK = 'fas fa-check';
            ButtonsCSS.Cancel = 'fas fa-undo-alt';
        });
        var convertArg = function (p2) { return RIAPP.Utils.check.isPlainObject(p2) ? JSON.stringify(p2, null, 2) : p2; };
        return bootstrap.startApp(function () {
            return new app_1.DemoApplication(options);
        }, function (app) {
            app.registerConverter('sizeConverter', new SizeConverter());
            app.registerSvc("testsvc", function (p1, p2, p3) {
                console.log("exec testsvc factory(%s, %s, %s)", convertArg(p1), convertArg(p2), convertArg(p3));
                return "testsvc implementation";
            });
            app.loadTemplates(options.templates_url);
            app.registerTemplateLoader('productEditTemplate', function () { return utils.http.getAjax(options.productEditTemplate_url); });
        }).then(function (app) {
            if (!!options.modelData && !!options.categoryData) {
                app.productVM.filter.modelData = options.modelData;
                app.productVM.filter.categoryData = options.categoryData;
                return null;
            }
            else {
                return app.productVM.filter.load().then(function () {
                    return app.productVM.load().then(function (loadRes) { });
                });
            }
        });
    }
    exports.start = start;
});
