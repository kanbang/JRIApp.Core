/// <reference path="../../../jriapp/jriapp_db.d.ts" />
/// <reference path="../../../jriapp/jriapp_shared.d.ts" />
declare module "domainModel" {
    import * as RIAPP from "jriapp_shared";
    import * as dbMOD from "jriapp_db";
    export interface IAddressInfo2 {
        AddressId: number;
        AddressLine1: string;
        City: string;
        StateProvince: string;
        CountryRegion: string;
    }
    export interface IKeyVal {
        key: number;
        val: string;
    }
    export interface IDEMOCLS {
        prodCategory: IKeyVal[];
        prodDescription: IKeyVal[];
        prodModel: IKeyVal[];
    }
    export interface ITestLookUpProduct {
        ProductId: number;
        Name: string;
    }
    export enum TestEnum {
        None = 0,
        OK = 1,
        Error = 2,
        Loading = 3
    }
    export interface IClientTestModel {
        Key: string;
        SomeProperty1: string;
        SomeProperty2: number[];
        SomeProperty3: string[];
        MoreComplexProperty: ITestLookUpProduct[];
        EnumProperty: TestEnum;
    }
    export interface IStrKeyVal {
        key: string;
        val: string;
    }
    export interface IRadioVal {
        key: string;
        value: string;
        comment: string;
    }
    export interface IHistoryItem {
        radioValue: string;
        time: Date;
    }
    export enum TestEnum2 {
        None = 0,
        One = 1,
        Two = 2,
        Three = 3
    }
    export interface ISvcMethods {
        GetClassifiers: () => RIAPP.IPromise<IDEMOCLS>;
        TestComplexInvoke: (args: {
            info: IAddressInfo2;
            keys: IKeyVal[];
        }) => RIAPP.IPromise<void>;
        TestInvoke: (args: {
            param1: number[];
            param2: string;
        }) => RIAPP.IPromise<string>;
    }
    export type TTestModelItemAspect = RIAPP.ListItemAspect<TestModelListItem, IClientTestModel>;
    export interface TestModelListItem extends IClientTestModel, RIAPP.IListItem {
        readonly _aspect: TTestModelItemAspect;
    }
    export class TestDictionary extends RIAPP.BaseDictionary<TestModelListItem, IClientTestModel> {
        constructor();
        itemFactory(aspect: TTestModelItemAspect): TestModelListItem;
        findItem(key: string): TestModelListItem;
        toString(): string;
    }
    export class TestList extends RIAPP.BaseList<TestModelListItem, IClientTestModel> {
        constructor();
        itemFactory(aspect: TTestModelItemAspect): TestModelListItem;
        toString(): string;
    }
    export type TKeyValItemAspect = RIAPP.ListItemAspect<KeyValListItem, IKeyVal>;
    export interface KeyValListItem extends IKeyVal, RIAPP.IListItem {
        readonly _aspect: TKeyValItemAspect;
    }
    export class KeyValDictionary extends RIAPP.BaseDictionary<KeyValListItem, IKeyVal> {
        constructor();
        itemFactory(aspect: TKeyValItemAspect): KeyValListItem;
        findItem(key: number): KeyValListItem;
        toString(): string;
    }
    export type TStrKeyValItemAspect = RIAPP.ListItemAspect<StrKeyValListItem, IStrKeyVal>;
    export interface StrKeyValListItem extends IStrKeyVal, RIAPP.IListItem {
        readonly _aspect: TStrKeyValItemAspect;
    }
    export class StrKeyValDictionary extends RIAPP.BaseDictionary<StrKeyValListItem, IStrKeyVal> {
        constructor();
        itemFactory(aspect: TStrKeyValItemAspect): StrKeyValListItem;
        findItem(key: string): StrKeyValListItem;
        toString(): string;
    }
    export type TRadioValItemAspect = RIAPP.ListItemAspect<RadioValListItem, IRadioVal>;
    export interface RadioValListItem extends IRadioVal, RIAPP.IListItem {
        readonly _aspect: TRadioValItemAspect;
    }
    export class RadioValDictionary extends RIAPP.BaseDictionary<RadioValListItem, IRadioVal> {
        constructor();
        itemFactory(aspect: TRadioValItemAspect): RadioValListItem;
        findItem(key: string): RadioValListItem;
        toString(): string;
    }
    export type THistoryItemItemAspect = RIAPP.ListItemAspect<HistoryItemListItem, IHistoryItem>;
    export interface HistoryItemListItem extends IHistoryItem, RIAPP.IListItem {
        readonly _aspect: THistoryItemItemAspect;
    }
    export class HistoryList extends RIAPP.BaseList<HistoryItemListItem, IHistoryItem> {
        constructor();
        itemFactory(aspect: THistoryItemItemAspect): HistoryItemListItem;
        toString(): string;
    }
    export interface ICustomer_Contact1 {
        EmailAddress: string;
        Phone: string;
    }
    export class Customer_Contact1 extends dbMOD.ChildComplexProperty implements ICustomer_Contact1 {
        constructor(name: string, parent: dbMOD.BaseComplexProperty);
        get EmailAddress(): string;
        set EmailAddress(v: string);
        get Phone(): string;
        set Phone(v: string);
        toString(): string;
    }
    export interface ICustomer_CustomerName {
        readonly Contact: ICustomer_Contact1;
        FirstName: string;
        LastName: string;
        MiddleName: string;
        readonly Name: string;
    }
    export class Customer_CustomerName extends dbMOD.RootComplexProperty implements ICustomer_CustomerName {
        private _Contact;
        constructor(name: string, owner: dbMOD.EntityAspect<dbMOD.IEntityItem, any, DbContext>);
        get Contact(): ICustomer_Contact1;
        get FirstName(): string;
        set FirstName(v: string);
        get LastName(): string;
        set LastName(v: string);
        get MiddleName(): string;
        set MiddleName(v: string);
        get Name(): string;
        toString(): string;
    }
    export interface IAddress {
        readonly AddressId: number;
        AddressLine1: string;
        AddressLine2: string;
        City: string;
        CountryRegion: string;
        ModifiedDate: Date;
        PostalCode: string;
        Rowguid: string;
        StateProvince: string;
    }
    export type TAddressAspect = dbMOD.EntityAspect<Address, IAddress, DbContext>;
    export interface Address extends IAddress, dbMOD.IEntityItem {
        readonly _aspect: TAddressAspect;
        readonly CustomerAddress: CustomerAddress[];
        readonly SalesOrderHeaderBillToAddress: SalesOrderHeader[];
        readonly SalesOrderHeaderShipToAddress: SalesOrderHeader[];
    }
    export class AddressDb extends dbMOD.DbSet<Address, IAddress, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TAddressAspect): Address;
        findEntity(addressId: number): Address;
        toString(): string;
        createReadAddressByIdsQuery(args?: {
            addressIDs: number[];
        }): dbMOD.DataQuery<Address, IAddress>;
        createReadAddressQuery(): dbMOD.DataQuery<Address, IAddress>;
    }
    export interface IAddressInfo {
        readonly AddressId: number;
        readonly AddressLine1: string;
        readonly City: string;
        readonly StateProvince: string;
        readonly CountryRegion: string;
    }
    export type TAddressInfoAspect = dbMOD.EntityAspect<AddressInfo, IAddressInfo, DbContext>;
    export interface AddressInfo extends IAddressInfo, dbMOD.IEntityItem {
        readonly _aspect: TAddressInfoAspect;
        readonly CustomerAddresses: CustomerAddress[];
    }
    export class AddressInfoDb extends dbMOD.DbSet<AddressInfo, IAddressInfo, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TAddressInfoAspect): AddressInfo;
        findEntity(addressId: number): AddressInfo;
        toString(): string;
        createReadAddressInfoQuery(): dbMOD.DataQuery<AddressInfo, IAddressInfo>;
    }
    export interface ICustomer {
        readonly CustomerName: ICustomer_CustomerName;
        readonly CustomerId: number;
        CompanyName: string;
        readonly ModifiedDate: Date;
        NameStyle: boolean;
        PasswordHash: string;
        PasswordSalt: string;
        readonly Rowguid: string;
        SalesPerson: string;
        Suffix: string;
        Title: string;
        AddressCount: number;
    }
    export type TCustomerAspect = dbMOD.EntityAspect<Customer, ICustomer, DbContext>;
    export interface Customer extends ICustomer, dbMOD.IEntityItem {
        readonly _aspect: TCustomerAspect;
        readonly CustomerAddress: CustomerAddress[];
        readonly SalesOrderHeader: SalesOrderHeader[];
    }
    export class CustomerDb extends dbMOD.DbSet<Customer, ICustomer, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TCustomerAspect): Customer;
        findEntity(customerId: number): Customer;
        toString(): string;
        createReadCustomerQuery(args?: {
            includeNav?: boolean;
        }): dbMOD.DataQuery<Customer, ICustomer>;
        defineCustomerName_NameField(getFunc: (item: Customer) => string): void;
    }
    export interface ICustomerAddress {
        CustomerId: number;
        AddressId: number;
        AddressType: string;
        ModifiedDate: Date;
        Rowguid: string;
    }
    export type TCustomerAddressAspect = dbMOD.EntityAspect<CustomerAddress, ICustomerAddress, DbContext>;
    export interface CustomerAddress extends ICustomerAddress, dbMOD.IEntityItem {
        readonly _aspect: TCustomerAddressAspect;
        Address: Address;
        AddressInfo: AddressInfo;
        Customer: Customer;
    }
    export class CustomerAddressDb extends dbMOD.DbSet<CustomerAddress, ICustomerAddress, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TCustomerAddressAspect): CustomerAddress;
        findEntity(customerId: number, addressId: number): CustomerAddress;
        toString(): string;
        createReadAddressForCustomersQuery(args?: {
            custIDs: number[];
        }): dbMOD.DataQuery<CustomerAddress, ICustomerAddress>;
        createReadCustomerAddressQuery(): dbMOD.DataQuery<CustomerAddress, ICustomerAddress>;
    }
    export interface ICustomerJSON {
        readonly CustomerId: number;
        Data: string;
        readonly Rowguid: string;
    }
    export type TCustomerJSONAspect = dbMOD.EntityAspect<CustomerJSON, ICustomerJSON, DbContext>;
    export interface CustomerJSON extends ICustomerJSON, dbMOD.IEntityItem {
        readonly _aspect: TCustomerJSONAspect;
        readonly Customer: any;
    }
    export class CustomerJSONDb extends dbMOD.DbSet<CustomerJSON, ICustomerJSON, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TCustomerJSONAspect): CustomerJSON;
        findEntity(customerId: number): CustomerJSON;
        toString(): string;
        createReadCustomerJSONQuery(): dbMOD.DataQuery<CustomerJSON, ICustomerJSON>;
        defineCustomerField(getFunc: (item: CustomerJSON) => any): void;
    }
    export interface ILookUpProduct {
        ProductId: number;
        Name: string;
    }
    export type TLookUpProductAspect = dbMOD.EntityAspect<LookUpProduct, ILookUpProduct, DbContext>;
    export interface LookUpProduct extends ILookUpProduct, dbMOD.IEntityItem {
        readonly _aspect: TLookUpProductAspect;
    }
    export class LookUpProductDb extends dbMOD.DbSet<LookUpProduct, ILookUpProduct, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TLookUpProductAspect): LookUpProduct;
        findEntity(productId: number): LookUpProduct;
        toString(): string;
        createReadProductLookUpQuery(): dbMOD.DataQuery<LookUpProduct, ILookUpProduct>;
    }
    export interface IProduct {
        readonly ProductId: number;
        Color: string;
        DiscontinuedDate: Date;
        ListPrice: number;
        readonly ModifiedDate: Date;
        Name: string;
        ProductCategoryId: number;
        ProductModelId: number;
        ProductNumber: string;
        readonly Rowguid: string;
        SellEndDate: Date;
        SellStartDate: Date;
        Size: string;
        StandardCost: number;
        readonly ThumbnailPhotoFileName: string;
        Weight: number;
    }
    export type TProductAspect = dbMOD.EntityAspect<Product, IProduct, DbContext>;
    export interface Product extends IProduct, dbMOD.IEntityItem {
        readonly _aspect: TProductAspect;
        readonly IsActive: boolean;
        ProductCategory: ProductCategory;
        ProductModel: ProductModel;
        readonly SalesOrderDetail: SalesOrderDetail[];
    }
    export class ProductDb extends dbMOD.DbSet<Product, IProduct, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TProductAspect): Product;
        findEntity(productId: number): Product;
        toString(): string;
        createReadProductByIdsQuery(args?: {
            productIDs: number[];
        }): dbMOD.DataQuery<Product, IProduct>;
        createReadProductQuery(args?: {
            param1: number[];
            param2: string;
        }): dbMOD.DataQuery<Product, IProduct>;
        defineIsActiveField(getFunc: (item: Product) => boolean): void;
    }
    export interface IProductCategory {
        readonly ProductCategoryId: number;
        ModifiedDate: Date;
        Name: string;
        ParentProductCategoryId: number;
        Rowguid: string;
    }
    export type TProductCategoryAspect = dbMOD.EntityAspect<ProductCategory, IProductCategory, DbContext>;
    export interface ProductCategory extends IProductCategory, dbMOD.IEntityItem {
        readonly _aspect: TProductCategoryAspect;
        readonly Product: Product[];
        ParentProductCategory: ProductCategory;
        readonly InverseParentProductCategory: ProductCategory[];
    }
    export class ProductCategoryDb extends dbMOD.DbSet<ProductCategory, IProductCategory, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TProductCategoryAspect): ProductCategory;
        findEntity(productCategoryId: number): ProductCategory;
        toString(): string;
        createReadProductCategoryQuery(): dbMOD.DataQuery<ProductCategory, IProductCategory>;
    }
    export interface IProductDescription {
        readonly ProductDescriptionId: number;
        Description: string;
        ModifiedDate: Date;
        Rowguid: string;
    }
    export type TProductDescriptionAspect = dbMOD.EntityAspect<ProductDescription, IProductDescription, DbContext>;
    export interface ProductDescription extends IProductDescription, dbMOD.IEntityItem {
        readonly _aspect: TProductDescriptionAspect;
        readonly ProductModelProductDescription: ProductModelProductDescription[];
    }
    export class ProductDescriptionDb extends dbMOD.DbSet<ProductDescription, IProductDescription, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TProductDescriptionAspect): ProductDescription;
        findEntity(productDescriptionId: number): ProductDescription;
        toString(): string;
    }
    export interface IProductModel {
        readonly ProductModelId: number;
        CatalogDescription: string;
        ModifiedDate: Date;
        Name: string;
        Rowguid: string;
    }
    export type TProductModelAspect = dbMOD.EntityAspect<ProductModel, IProductModel, DbContext>;
    export interface ProductModel extends IProductModel, dbMOD.IEntityItem {
        readonly _aspect: TProductModelAspect;
        readonly Product: Product[];
        readonly ProductModelProductDescription: ProductModelProductDescription[];
    }
    export class ProductModelDb extends dbMOD.DbSet<ProductModel, IProductModel, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TProductModelAspect): ProductModel;
        findEntity(productModelId: number): ProductModel;
        toString(): string;
        createReadProductModelQuery(): dbMOD.DataQuery<ProductModel, IProductModel>;
    }
    export interface IProductModelProductDescription {
        ProductModelId: number;
        ProductDescriptionId: number;
        Culture: string;
        ModifiedDate: Date;
        Rowguid: string;
    }
    export type TProductModelProductDescriptionAspect = dbMOD.EntityAspect<ProductModelProductDescription, IProductModelProductDescription, DbContext>;
    export interface ProductModelProductDescription extends IProductModelProductDescription, dbMOD.IEntityItem {
        readonly _aspect: TProductModelProductDescriptionAspect;
        ProductDescription: ProductDescription;
        ProductModel: ProductModel;
    }
    export class ProductModelProductDescriptionDb extends dbMOD.DbSet<ProductModelProductDescription, IProductModelProductDescription, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TProductModelProductDescriptionAspect): ProductModelProductDescription;
        findEntity(productModelId: number, productDescriptionId: number, culture: string): ProductModelProductDescription;
        toString(): string;
    }
    export interface ISalesInfo {
        SalesPerson: string;
    }
    export type TSalesInfoAspect = dbMOD.EntityAspect<SalesInfo, ISalesInfo, DbContext>;
    export interface SalesInfo extends ISalesInfo, dbMOD.IEntityItem {
        readonly _aspect: TSalesInfoAspect;
    }
    export class SalesInfoDb extends dbMOD.DbSet<SalesInfo, ISalesInfo, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TSalesInfoAspect): SalesInfo;
        findEntity(salesPerson: string): SalesInfo;
        toString(): string;
        createReadSalesInfoQuery(): dbMOD.DataQuery<SalesInfo, ISalesInfo>;
    }
    export interface ISalesOrderDetail {
        SalesOrderId: number;
        readonly SalesOrderDetailId: number;
        LineTotal: number;
        ModifiedDate: Date;
        OrderQty: number;
        ProductId: number;
        Rowguid: string;
        UnitPrice: number;
        UnitPriceDiscount: number;
    }
    export type TSalesOrderDetailAspect = dbMOD.EntityAspect<SalesOrderDetail, ISalesOrderDetail, DbContext>;
    export interface SalesOrderDetail extends ISalesOrderDetail, dbMOD.IEntityItem {
        readonly _aspect: TSalesOrderDetailAspect;
        Product: Product;
        SalesOrder: SalesOrderHeader;
    }
    export class SalesOrderDetailDb extends dbMOD.DbSet<SalesOrderDetail, ISalesOrderDetail, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TSalesOrderDetailAspect): SalesOrderDetail;
        findEntity(salesOrderId: number, salesOrderDetailId: number): SalesOrderDetail;
        toString(): string;
        createReadSalesOrderDetailQuery(): dbMOD.DataQuery<SalesOrderDetail, ISalesOrderDetail>;
    }
    export interface ISalesOrderHeader {
        readonly SalesOrderId: number;
        AccountNumber: string;
        BillToAddressId: number;
        Comment: string;
        CreditCardApprovalCode: string;
        CustomerId: number;
        DueDate: Date;
        Freight: number;
        ModifiedDate: Date;
        OnlineOrderFlag: boolean;
        OrderDate: Date;
        PurchaseOrderNumber: string;
        RevisionNumber: number;
        Rowguid: string;
        SalesOrderNumber: string;
        ShipDate: Date;
        ShipMethod: string;
        ShipToAddressId: number;
        Status: number;
        SubTotal: number;
        TaxAmt: number;
        TotalDue: number;
    }
    export type TSalesOrderHeaderAspect = dbMOD.EntityAspect<SalesOrderHeader, ISalesOrderHeader, DbContext>;
    export interface SalesOrderHeader extends ISalesOrderHeader, dbMOD.IEntityItem {
        readonly _aspect: TSalesOrderHeaderAspect;
        readonly SalesOrderDetail: SalesOrderDetail[];
        BillToAddress: Address;
        Customer: Customer;
        ShipToAddress: Address;
    }
    export class SalesOrderHeaderDb extends dbMOD.DbSet<SalesOrderHeader, ISalesOrderHeader, DbContext> {
        constructor(dbContext: DbContext);
        itemFactory(aspect: TSalesOrderHeaderAspect): SalesOrderHeader;
        findEntity(salesOrderId: number): SalesOrderHeader;
        toString(): string;
        createReadSalesOrderHeaderQuery(): dbMOD.DataQuery<SalesOrderHeader, ISalesOrderHeader>;
    }
    export interface IAssocs {
        getCustAddr_AddressInfo: () => dbMOD.Association;
        getCustomerAddress_Address: () => dbMOD.Association;
        getCustomerAddress_Customer: () => dbMOD.Association;
        getInverseParentProductCategory_ParentProductCategory: () => dbMOD.Association;
        getProduct_ProductCategory: () => dbMOD.Association;
        getProduct_ProductModel: () => dbMOD.Association;
        getProductModelProductDescription_ProductDescription: () => dbMOD.Association;
        getProductModelProductDescription_ProductModel: () => dbMOD.Association;
        getSalesOrderDetail_Product: () => dbMOD.Association;
        getSalesOrderDetail_SalesOrder: () => dbMOD.Association;
        getSalesOrderHeader_Customer: () => dbMOD.Association;
        getSalesOrderHeaderBillToAddress_BillToAddress: () => dbMOD.Association;
        getSalesOrderHeaderShipToAddress_ShipToAddress: () => dbMOD.Association;
    }
    export class DbSets extends dbMOD.DbSets {
        constructor(dbContext: DbContext);
        get Address(): AddressDb;
        get AddressInfo(): AddressInfoDb;
        get Customer(): CustomerDb;
        get CustomerAddress(): CustomerAddressDb;
        get CustomerJSON(): CustomerJSONDb;
        get LookUpProduct(): LookUpProductDb;
        get Product(): ProductDb;
        get ProductCategory(): ProductCategoryDb;
        get ProductDescription(): ProductDescriptionDb;
        get ProductModel(): ProductModelDb;
        get ProductModelProductDescription(): ProductModelProductDescriptionDb;
        get SalesInfo(): SalesInfoDb;
        get SalesOrderDetail(): SalesOrderDetailDb;
        get SalesOrderHeader(): SalesOrderHeaderDb;
    }
    export class DbContext extends dbMOD.DbContext<DbSets, ISvcMethods, IAssocs> {
        protected _createDbSets(): DbSets;
        protected _createAssociations(): dbMOD.IAssociationInfo[];
        protected _createMethods(): dbMOD.IQueryInfo[];
    }
}
declare module "addressVM" {
    import * as RIAPP from "jriapp";
    import * as DEMODB from "domainModel";
    import { DemoApplication } from "app";
    import { OrderVM } from "orderVM";
    export class AddressVM extends RIAPP.ViewModel<DemoApplication> {
        private _orderVM;
        private _dbSet;
        constructor(orderVM: OrderVM);
        protected _onCurrentChanged(): void;
        loadAddressesForOrders(orders: DEMODB.SalesOrderHeader[]): RIAPP.IStatefulPromise<import("jriapp_db/int").IQueryResult<DEMODB.Address>>;
        load(ids: number[], isClearTable: boolean): RIAPP.IStatefulPromise<import("jriapp_db/int").IQueryResult<DEMODB.Address>>;
        clear(): void;
        dispose(): void;
        get _customerDbSet(): DEMODB.CustomerDb;
        get dbContext(): DEMODB.DbContext;
        get dbSets(): DEMODB.DbSets;
        get currentItem(): DEMODB.Address;
        get dbSet(): DEMODB.AddressDb;
        get orderVM(): OrderVM;
    }
}
declare module "productVM" {
    import * as RIAPP from "jriapp";
    import * as DEMODB from "domainModel";
    import { DemoApplication } from "app";
    import { OrderDetailVM } from "orderDetVM";
    export class ProductVM extends RIAPP.ViewModel<DemoApplication> {
        private _orderDetailVM;
        private _dbSet;
        constructor(orderDetailVM: OrderDetailVM);
        protected _onCurrentChanged(): void;
        clear(): void;
        loadProductsForOrderDetails(orderDetails: DEMODB.SalesOrderDetail[]): RIAPP.IStatefulPromise<import("jriapp_db/int").IQueryResult<DEMODB.Product>>;
        load(ids: number[], isClearTable: boolean): RIAPP.IStatefulPromise<import("jriapp_db/int").IQueryResult<DEMODB.Product>>;
        dispose(): void;
        get _customerDbSet(): DEMODB.CustomerDb;
        get dbContext(): DEMODB.DbContext;
        get dbSets(): DEMODB.DbSets;
        get currentItem(): DEMODB.Product;
        get dbSet(): DEMODB.ProductDb;
    }
}
declare module "orderDetVM" {
    import * as RIAPP from "jriapp";
    import * as dbMOD from "jriapp_db";
    import * as DEMODB from "domainModel";
    import { DemoApplication } from "app";
    import { OrderVM } from "orderVM";
    export class OrderDetailVM extends RIAPP.ViewModel<DemoApplication> {
        private _orderVM;
        private _dbSet;
        private _currentOrder;
        private _productVM;
        constructor(orderVM: OrderVM);
        protected _onCurrentChanged(): void;
        load(): RIAPP.IStatefulPromise<dbMOD.IQueryResult<DEMODB.SalesOrderDetail>>;
        clear(): void;
        dispose(): void;
        get dbContext(): DEMODB.DbContext;
        get dbSets(): DEMODB.DbSets;
        get currentItem(): DEMODB.SalesOrderDetail;
        get dbSet(): DEMODB.SalesOrderDetailDb;
        get currentOrder(): DEMODB.SalesOrderHeader;
        set currentOrder(v: DEMODB.SalesOrderHeader);
        get orderVM(): OrderVM;
    }
}
declare module "orderVM" {
    import * as RIAPP from "jriapp";
    import * as dbMOD from "jriapp_db";
    import * as uiMOD from "jriapp_ui";
    import * as DEMODB from "domainModel";
    import { DemoApplication } from "app";
    import { IMyGridEvents } from "gridEvents";
    import { CustomerVM } from "customerVM";
    import { OrderDetailVM } from "orderDetVM";
    export class OrderVM extends RIAPP.ViewModel<DemoApplication> implements uiMOD.ITabsEvents {
        private _customerVM;
        private _dbSet;
        private _currentCustomer;
        private _gridEvents;
        private _selectedTabIndex;
        private _orderStatuses;
        private _addNewCommand;
        private _addressVM;
        private _orderDetailVM;
        private _tabs;
        constructor(customerVM: CustomerVM);
        addTabs(tabs: uiMOD.ITabs): void;
        removeTabs(): void;
        onTabSelected(tabs: uiMOD.ITabs): void;
        _onGridPageChanged(): void;
        _onGridRowSelected(item: DEMODB.SalesOrderHeader): void;
        _onGridRowExpanded(item: DEMODB.SalesOrderHeader): void;
        _onGridRowCollapsed(item: DEMODB.SalesOrderHeader): void;
        protected _onCurrentChanged(): void;
        clear(): void;
        load(): RIAPP.IStatefulPromise<dbMOD.IQueryResult<DEMODB.SalesOrderHeader>>;
        dispose(): void;
        get dbContext(): DEMODB.DbContext;
        get dbSets(): DEMODB.DbSets;
        get currentItem(): DEMODB.SalesOrderHeader;
        get dbSet(): DEMODB.SalesOrderHeaderDb;
        get addNewCommand(): RIAPP.ICommand<any>;
        get orderStatuses(): DEMODB.KeyValDictionary;
        get currentCustomer(): DEMODB.Customer;
        set currentCustomer(v: DEMODB.Customer);
        get customerVM(): CustomerVM;
        get orderDetailsVM(): OrderDetailVM;
        get selectedTabIndex(): number;
        get tabsEvents(): uiMOD.ITabsEvents;
        get gridEvents(): IMyGridEvents<DEMODB.SalesOrderHeader>;
    }
}
declare module "gridEvents" {
    import * as RIAPP from "jriapp";
    import * as DEMODB from "domainModel";
    import * as COMMON from "common";
    import { CustomerVM } from "customerVM";
    import { OrderVM } from "orderVM";
    export interface IMyGridEvents<TItem extends RIAPP.ICollectionItem> extends COMMON.IGridEvents<TItem> {
        dispose(): void;
        focusGrid(): void;
    }
    export class CustomerGridEvents extends RIAPP.BaseObject implements IMyGridEvents<DEMODB.Customer> {
        private _customerVM;
        private _doFocus;
        constructor(customerVM: CustomerVM);
        regFocusGridFunc(doFocus: () => void): void;
        onDataPageChanged(): void;
        onRowSelected(item: DEMODB.Customer): void;
        onRowExpanded(item: DEMODB.Customer): void;
        onRowCollapsed(item: DEMODB.Customer): void;
        focusGrid(): void;
        dispose(): void;
    }
    export class OrderGridEvents extends RIAPP.BaseObject implements IMyGridEvents<DEMODB.SalesOrderHeader> {
        private _orderVM;
        private _doFocus;
        constructor(orderVM: OrderVM);
        regFocusGridFunc(doFocus: () => void): void;
        onDataPageChanged(): void;
        onRowSelected(item: DEMODB.SalesOrderHeader): void;
        onRowExpanded(item: DEMODB.SalesOrderHeader): void;
        onRowCollapsed(item: DEMODB.SalesOrderHeader): void;
        focusGrid(): void;
        dispose(): void;
    }
}
declare module "animation" {
    import * as RIAPP from "jriapp";
    import * as uiMOD from "jriapp_ui";
    export class FadeAnimation extends RIAPP.BaseObject implements uiMOD.IDynaContentAnimation {
        private _$animatedEl;
        private _effect;
        private _duration;
        constructor(isAnimateFirstShow: boolean, duration?: number);
        beforeShow(template: RIAPP.ITemplate, isFirstShow: boolean): void;
        show(template: RIAPP.ITemplate, isFirstShow: boolean): RIAPP.IVoidPromise;
        beforeHide(template: RIAPP.ITemplate): void;
        hide(template: RIAPP.ITemplate): RIAPP.IVoidPromise;
        stop(): void;
        get isAnimateFirstShow(): boolean;
        dispose(): void;
    }
    export class SlideAnimation extends RIAPP.BaseObject implements uiMOD.IDynaContentAnimation {
        private _$animatedEl;
        private _effect;
        private _duration;
        constructor(isAnimateFirstShow: boolean, duration?: number);
        beforeShow(template: RIAPP.ITemplate, isFirstShow: boolean): void;
        show(template: RIAPP.ITemplate, isFirstShow: boolean): RIAPP.IVoidPromise;
        beforeHide(template: RIAPP.ITemplate): void;
        hide(template: RIAPP.ITemplate): RIAPP.IVoidPromise;
        stop(): void;
        get isAnimateFirstShow(): boolean;
        dispose(): void;
    }
    export function initModule(app: RIAPP.Application): {};
}
declare module "routes" {
    import * as RIAPP from "jriapp";
    import * as uiMOD from "jriapp_ui";
    export class MainRoute extends RIAPP.BaseObject {
        private _custTemplName;
        private _custDetTemplName;
        private _viewName;
        private _animation;
        constructor();
        goToAllCust(): void;
        goToCustDet(): void;
        reset(): void;
        get animation(): uiMOD.IDynaContentAnimation;
        set animation(v: uiMOD.IDynaContentAnimation);
        get viewName(): string;
        set viewName(v: string);
        get custTemplName(): string;
        get custDetTemplName(): string;
    }
    export class CustDetRoute extends RIAPP.BaseObject {
        private _infoTemplName;
        private _adrTemplName;
        private _viewName;
        private _animation;
        constructor();
        goToCustInfo(): void;
        goToAdrInfo(): void;
        reset(): void;
        get animation(): uiMOD.IDynaContentAnimation;
        set animation(v: uiMOD.IDynaContentAnimation);
        get viewName(): string;
        set viewName(v: string);
        get infoTemplName(): string;
        get adrTemplName(): string;
    }
    export class AddressRoute extends RIAPP.BaseObject {
        private readonly _linkAdrTemplate;
        private readonly _newAdrTemplate;
        private _viewName;
        constructor();
        goToLinkAdr(): void;
        goToNewAdr(): void;
        get viewName(): string;
        set viewName(v: string);
        get linkAdrTemplate(): string;
        get newAdrTemplate(): string;
        get isSearchVisible(): boolean;
    }
}
declare module "addAddressVM" {
    import * as RIAPP from "jriapp";
    import * as dbMOD from "jriapp_db";
    import * as uiMOD from "jriapp_ui";
    import * as DEMODB from "domainModel";
    import { DemoApplication } from "app";
    import { CustomerAddressVM } from "custAddressVM";
    import { AddressRoute } from "routes";
    export class AddAddressVM extends RIAPP.ViewModel<DemoApplication> implements RIAPP.ISubmittable {
        private _customerAddressVM;
        private _addressInfosDb;
        private _currentCustomer;
        private _searchToolTip;
        private _newAddress;
        private _dataGrid;
        private _searchString;
        private _dialogVM;
        private _addressInfosView;
        private _linkCommand;
        private _addNewCommand;
        private _unLinkCommand;
        private _execSearchCommand;
        private _addNewAddressCommand;
        private _uiAddressRoute;
        constructor(customerAddressVM: CustomerAddressVM);
        protected _addGrid(grid: uiMOD.DataGrid): void;
        protected _removeGrid(): void;
        protected _cancelAddNewAddress(): void;
        protected _addNewAddress(): void;
        protected _linkAddress(): void;
        protected _unLinkAddress(): void;
        protected _addAddressRP(addressId: number): RIAPP.IStatefulPromise<dbMOD.IQueryResult<DEMODB.AddressInfo>>;
        protected _checkAddressInRP(addressId: number): boolean;
        protected _removeAddressRP(addressId: number): void;
        loadAddressInfos(): RIAPP.IStatefulPromise<dbMOD.IQueryResult<DEMODB.AddressInfo>>;
        submitChanges(): RIAPP.IPromise<any>;
        rejectChanges(): void;
        dispose(): void;
        get dbContext(): DEMODB.DbContext;
        get dbSets(): DEMODB.DbSets;
        get isCanSubmit(): boolean;
        get addressInfosDb(): DEMODB.AddressInfoDb;
        get addressInfosView(): dbMOD.DataView<DEMODB.AddressInfo>;
        get addressesView(): dbMOD.DataView<DEMODB.Address>;
        get custAdressView(): dbMOD.ChildDataView<DEMODB.CustomerAddress>;
        get currentAddressInfo(): DEMODB.AddressInfo;
        get searchString(): string;
        set searchString(v: string);
        get addNewCommand(): RIAPP.ICommand<any>;
        get execSearchCommand(): RIAPP.ICommand<any>;
        get addNewAddressCommand(): RIAPP.ICommand<any>;
        get linkCommand(): RIAPP.ICommand<any>;
        get unLinkCommand(): RIAPP.ICommand<any>;
        get newAddress(): DEMODB.Address;
        get customer(): DEMODB.Customer;
        get grid(): uiMOD.DataGrid;
        set grid(v: uiMOD.DataGrid);
        get searchToolTip(): string;
        get uiAddressRoute(): AddressRoute;
    }
}
declare module "custAddressVM" {
    import * as RIAPP from "jriapp";
    import * as dbMOD from "jriapp_db";
    import * as DEMODB from "domainModel";
    import { DemoApplication } from "app";
    import { CustomerVM } from "customerVM";
    import { AddAddressVM } from "addAddressVM";
    export class CustomerAddressVM extends RIAPP.ViewModel<DemoApplication> {
        private _customerVM;
        private _addressesDb;
        private _custAdressDb;
        private _currentCustomer;
        private _addAddressVM;
        private _addressesView;
        constructor(customerVM: CustomerVM);
        _loadAddresses(addressIds: number[], isClearTable: boolean): RIAPP.IStatefulPromise<dbMOD.IQueryResult<DEMODB.Address>>;
        _addNewAddress(): DEMODB.Address;
        _addNewCustAddress(address: DEMODB.Address): DEMODB.CustomerAddress;
        load(customers: DEMODB.Customer[]): void;
        dispose(): void;
        private get _custAdressView();
        get dbContext(): DEMODB.DbContext;
        get dbSets(): DEMODB.DbSets;
        get addressesDb(): DEMODB.AddressDb;
        get custAdressDb(): DEMODB.CustomerAddressDb;
        get addressesView(): dbMOD.DataView<DEMODB.Address>;
        get custAdressView(): dbMOD.ChildDataView<DEMODB.CustomerAddress>;
        get addAddressVM(): AddAddressVM;
        get currentCustomer(): DEMODB.Customer;
    }
}
declare module "customerVM" {
    import * as RIAPP from "jriapp";
    import * as dbMOD from "jriapp_db";
    import * as DEMODB from "domainModel";
    import { DemoApplication } from "app";
    import { IMyGridEvents } from "gridEvents";
    import { MainRoute, CustDetRoute } from "routes";
    import { CustomerAddressVM } from "custAddressVM";
    import { OrderVM } from "orderVM";
    export class CustomerVM extends RIAPP.ViewModel<DemoApplication> {
        private _dbSet;
        private _propWatcher;
        private _addNewCommand;
        private _saveCommand;
        private _undoCommand;
        private _loadCommand;
        private _editCommand;
        private _endEditCommand;
        private _cancelEditCommand;
        private _custAdressView;
        private _customerAddressVM;
        private _ordersVM;
        private _uiMainRoute;
        private _uiCustDetRoute;
        private _switchViewCommand;
        private _switchDetViewCommand;
        private _gridEvents;
        constructor(app: DemoApplication);
        protected _onCurrentChanged(): void;
        _onGridPageChanged(): void;
        _onGridRowSelected(item: DEMODB.Customer): void;
        _onGridRowExpanded(item: DEMODB.Customer): void;
        _onGridRowCollapsed(item: DEMODB.Customer): void;
        load(): RIAPP.IStatefulPromise<dbMOD.IQueryResult<dbMOD.IEntityItem>>;
        dispose(): void;
        get dbContext(): DEMODB.DbContext;
        get dbSets(): DEMODB.DbSets;
        get dbSet(): DEMODB.CustomerDb;
        get currentItem(): DEMODB.Customer;
        get editCommand(): RIAPP.ICommand<any>;
        get endEditCommand(): RIAPP.ICommand<any>;
        get cancelEditCommand(): RIAPP.ICommand<any>;
        get addNewCommand(): RIAPP.ICommand<any>;
        get saveCommand(): RIAPP.ICommand<any>;
        get undoCommand(): RIAPP.ICommand<any>;
        get loadCommand(): RIAPP.ICommand<any>;
        get ordersVM(): OrderVM;
        get custAdressView(): dbMOD.ChildDataView<DEMODB.CustomerAddress>;
        get customerAddressVM(): CustomerAddressVM;
        get switchViewCommand(): RIAPP.ICommand<any>;
        get switchDetViewCommand(): RIAPP.ICommand<any>;
        get uiMainRoute(): MainRoute;
        get uiCustDetRoute(): CustDetRoute;
        get gridEvents(): IMyGridEvents<DEMODB.Customer>;
    }
}
declare module "app" {
    import * as RIAPP from "jriapp";
    import * as dbMOD from "jriapp_db";
    import * as COMMON from "common";
    import * as DEMODB from "domainModel";
    import { CustomerVM } from "customerVM";
    export interface IMainOptions extends RIAPP.IAppOptions {
        service_url: string;
        permissionInfo?: dbMOD.IPermissionsInfo;
        images_path: string;
        spa_template1_url: string;
        spa_template2_url: string;
        spa_template3_url: string;
    }
    export class DemoApplication extends RIAPP.Application {
        private _dbContext;
        private _errorVM;
        private _customerVM;
        private _yearmonth;
        private _month;
        private _months;
        constructor(options: IMainOptions);
        onStartUp(): void;
        private _handleError;
        dispose(): void;
        get options(): IMainOptions;
        get dbContext(): DEMODB.DbContext;
        get errorVM(): COMMON.ErrorViewModel;
        get customerVM(): CustomerVM;
        get TEXT(): Partial<import("jriapp_shared/lang")._IText>;
        get month(): number;
        set month(v: number);
        get months(): DEMODB.KeyValDictionary;
        get yearmonth(): Date;
        set yearmonth(v: Date);
    }
}
declare module "gridElView" {
    import * as RIAPP from "jriapp";
    import * as uiMOD from "jriapp_ui";
    import * as COMMON from "common";
    export class GridElView extends uiMOD.DataGridElView {
        private _myGridEvents;
        constructor(el: HTMLTableElement, options: uiMOD.IDataGridViewOptions);
        protected _onGridPageChanged(): void;
        protected _onGridRowSelected(row: uiMOD.DataGridRow): void;
        protected _onGridRowExpanded(oldRow: uiMOD.DataGridRow, row: uiMOD.DataGridRow, isExpanded: boolean): void;
        dispose(): void;
        get myGridEvents(): COMMON.IGridEvents<RIAPP.ICollectionItem>;
        set myGridEvents(v: COMMON.IGridEvents<RIAPP.ICollectionItem>);
    }
    export function initModule(app: RIAPP.Application): void;
}
declare module "prodAutocomplete" {
    import * as RIAPP from "jriapp";
    import * as DEMODB from "domainModel";
    import * as AUTOCOMPLETE from "autocomplete";
    export class ProductAutoComplete extends AUTOCOMPLETE.AutoCompleteElView {
        private _lastLoadedId;
        private _lookupSource;
        constructor(el: HTMLInputElement, options: AUTOCOMPLETE.IAutocompleteOptions);
        protected _updateSelection(): void;
        protected _onHide(): void;
        protected _updateValue(): void;
        protected setDataContext(v: DEMODB.SalesOrderDetail): void;
        protected getDataContext(): DEMODB.SalesOrderDetail;
        get currentSelection(): number;
    }
    export function initModule(app: RIAPP.Application): void;
}
declare module "main" {
    import * as RIAPP from "jriapp";
    import { IMainOptions } from "app";
    export function start(options: IMainOptions): RIAPP.IPromise<import("jriapp_db/int").IQueryResult<import("jriapp_db/int").IEntityItem>>;
}
