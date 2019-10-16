import * as RIAPP from "jriapp";
import * as dbMOD from "jriapp_db";
import * as COMMON from "common";

import * as DEMODB from "./domainModel";
import { ErrorViewModel } from "common";
import { CustomerVM } from "./customerVM";

export interface IMainOptions extends RIAPP.IAppOptions {
    service_url: string;
    permissionInfo?: dbMOD.IPermissionsInfo;
    images_path: string;
    spa_template1_url: string;
    spa_template2_url: string;
    spa_template3_url: string;
}

export class DemoApplication extends RIAPP.Application {
    private _dbContext: DEMODB.DbContext;
    private _errorVM: ErrorViewModel;
    private _customerVM: CustomerVM;
    private _yearmonth: Date;
    private _month: number;
    private _months: DEMODB.KeyValDictionary;

    constructor(options: IMainOptions) {
        super(options);
        this._dbContext = null;
        this._errorVM = null;
        this._customerVM = null;
        this._yearmonth = null;
        this._month = new Date().getMonth() + 1;
        this._months = new DEMODB.KeyValDictionary();
    }
    onStartUp() {
        const self = this, options: IMainOptions = self.options;
        this._dbContext = new DEMODB.DbContext();
        this._dbContext.initialize({ serviceUrl: options.service_url, permissions: options.permissionInfo });
        function toText(str:string) {
            if (str === null)
                return '';
            else
                return str;
        };

        this._dbContext.dbSets.Customer.defineCustomerName_NameField(function (item) {
            return toText(item.CustomerName.LastName) + '  ' + toText(item.CustomerName.MiddleName) + '  ' + toText(item.CustomerName.FirstName);
        });
        //register globally accesible dbContext's instance
        this.registerSvc("$dbContext", this._dbContext);
        this._errorVM = new ErrorViewModel(this);
        this._customerVM = new CustomerVM(this);

        function handleError(sender: any, data:any) {
            self._handleError(sender, data);
        };
        //here we could process application's errors
        this.objEvents.addOnError(handleError);
        this._dbContext.objEvents.addOnError(handleError);
        this._dbContext.requestHeaders['RequestVerificationToken'] = COMMON.getAntiForgeryToken();
        super.onStartUp();
    }
    private _handleError(sender:any, data:any) {
        debugger;
        data.isHandled = true;
        this.errorVM.error = data.error;
        this.errorVM.showDialog();
    }
    //really, the dispose method is redundant here because the application lives while the page lives
    dispose() {
        if (this.getIsDisposed())
            return;
        this.setDisposing();
        const self = this;
        try {
            self._errorVM.dispose();
            self._customerVM.dispose();
            self._dbContext.dispose();
        } finally {
            super.dispose();
        }
    }
    get options() { return <IMainOptions>this._options; }
    get dbContext() { return this._dbContext; }
    get errorVM() { return this._errorVM; }
    get customerVM() { return this._customerVM; }
    get TEXT() { return RIAPP.LocaleSTRS.TEXT; }

    get month() { return this._month; }
    set month(v) {
        if (v !== this._month) {
            this._month = v;
            this.objEvents.raiseProp('month');
        }
    }
    get months() { return this._months; }
    get yearmonth() { return this._yearmonth; }
    set yearmonth(v) {
        if (v !== this._yearmonth) {
            this._yearmonth = v;
            this.objEvents.raiseProp('yearmonth');
        }
    }
}