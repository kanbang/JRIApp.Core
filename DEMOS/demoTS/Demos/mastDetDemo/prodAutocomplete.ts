import * as RIAPP from "jriapp";
import * as DEMODB from "../demo/demoDB";
import * as AUTOCOMPLETE from "autocomplete";

export class ProductAutoComplete extends AUTOCOMPLETE.AutoCompleteElView {
    private _lastLoadedId: number;
    private _lookupSource: DEMODB.ProductDb;

    constructor(el: HTMLInputElement, options: AUTOCOMPLETE.IAutocompleteOptions) {
        super(el, options);
        const self = this;
        this._lastLoadedId = null;
        this._lookupSource = <DEMODB.ProductDb>this._getDbContext().getDbSet('Product');
        this._lookupSource.addOnCollChanged(function (_s, args) {
            self._updateValue();
        }, self.uniqueID);
    }
    //override
    protected _updateSelection() {
        if (!!this.dataContext) {
            const id = this.currentSelection;
            this.getDataContext().ProductId = id;
        }
    }
    //override
    protected _onHide() {
        this._updateValue();
        super._onHide();
    }
    //new method
    protected _updateValue() {
        if (!this.dataContext) {
            this.value = '';
            return;
        }
        const productId = this.getDataContext().ProductId, product = this._lookupSource.findEntity(productId);
        if (!!product) {
            this.value = product.Name;
        } else {
            this.value = '';
            if (this._lastLoadedId !== productId) {
                //this prevents the cicles of loading of the same item
                this._lastLoadedId = productId;
                const query = this._lookupSource.createReadProductByIdsQuery({ productIDs: [productId] });
                query.isClearPrevData = false;
                query.load();
            }
        }
    }
    //override
    protected setDataContext(v: DEMODB.SalesOrderDetail) {
        const old = this.getDataContext(), self = this;
        if (old !== v) {
            const dxt = v;
            if (!!dxt) {
                dxt.objEvents.onProp('ProductId', (_s, a) => {
                    self._updateValue();
                }, this.uniqueID);
            }
            super.setDataContext(v);
            self._updateValue();
        }
    }
    protected getDataContext() { return <DEMODB.SalesOrderDetail>super.getDataContext(); }
    //overriden base property
    get currentSelection() {
        if (!!this.gridDataSource.currentItem) {
            return <number>(<any>this.gridDataSource.currentItem)['ProductId'];
        } else {
            return null;
        }
    }
}
//this function is executed when the application is created
//it can be used to initialize application's specific resources in the namespace
export function initModule(app: RIAPP.Application) {
    app.registerElView('productAutocomplete', ProductAutoComplete);
};