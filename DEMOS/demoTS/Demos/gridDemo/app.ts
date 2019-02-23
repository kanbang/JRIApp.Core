import * as RIAPP from "jriapp";
import * as dbMOD from "jriapp_db";
import  * as _signalR from "./signalr/index";

import * as DEMODB from "../demo/demoDB";
import * as COMMON from "common";
import * as HEADER from "header";

import { ProductViewModel } from "./productVM";
import { UploadThumbnailVM } from "./uploads";

/*
declare global {
    const signalR: typeof _signalR;
}
*/

//ambient require function
declare var require: any;

export interface IMainOptions extends RIAPP.IAppOptions {
    service_url: string;
    permissionInfo?: dbMOD.IPermissionsInfo;
    upload_thumb_url: string;
    templates_url: string;
    productEditTemplate_url: string;
    modelData: any;
    categoryData: any;
    sse_url: string;
}

//strongly typed aplication's class
export class DemoApplication extends RIAPP.Application {
    private _dbContext: DEMODB.DbContext;
    private _errorVM: COMMON.ErrorViewModel;
    private _headerVM: HEADER.HeaderVM;
    private _productVM: ProductViewModel;
    private _uploadVM: UploadThumbnailVM;
    private _hubConnection: _signalR.HubConnection;
    private _sseMessage: string;
    private _openHubCommand: RIAPP.ICommand;
    private _closeHubCommand: RIAPP.ICommand;
    private _hubStarted: boolean;
    private _signalrPromise: RIAPP.IPromise<void>;

    constructor(options: IMainOptions) {
        super(options);
        this._dbContext = null;
        this._errorVM = null;
        this._headerVM = null;
        this._productVM = null;
        this._uploadVM = null;
        this._hubConnection = null;
        this._hubStarted = false;
        this._signalrPromise = null;
        const self = this;
        this._openHubCommand = new RIAPP.Command(() => {
            self._initSignalR().then(() => {
                this._hubConnection.on("OnNewQuote", function (data: string) {
                    self._onNewQuote(data);
                });

                this._hubConnection.start().then(() => {
                    self._hubStarted = true;
                    setTimeout(() => {
                        self._closeHubCommand.raiseCanExecuteChanged();
                        self._openHubCommand.raiseCanExecuteChanged();
                    }, 0);
                    // on starting send a quote to read by other clients
                    self._hubConnection.send('SendMyQuote', "My own quote of the day");
                }).catch((res: any) => {
                    self.handleError(res, self);
                });

            }).catch((res: any) => {
                self.handleError(res, self);
            });
        }, () => {
            return !!options.sse_url && !this._hubStarted;
        });
            

        this._closeHubCommand = new RIAPP.Command(() => {
            this._hubConnection.stop().catch((res: any) => {
                self.handleError(res, self);
            });

            this._hubConnection.off("OnNewQuote");
        }, () => {
            return !!this._hubConnection && !!this._hubStarted;
        });
    }
    onStartUp() {
        const self = this, options: IMainOptions = self.options;
        this._dbContext = new DEMODB.DbContext();
        this._dbContext.addOnDbSetCreating((s, a) => {
            // console.log("DbSet: %s is creating", a.name);
        });
        this._dbContext.initialize({ serviceUrl: options.service_url, permissions: options.permissionInfo });
        this._dbContext.dbSets.Product.defineIsActiveField(function (item) {
            return !item.SellEndDate;
        });
        this._errorVM = new COMMON.ErrorViewModel(this);
        this._headerVM = new HEADER.HeaderVM(this);
        this._productVM = new ProductViewModel(this);
        this._uploadVM = new UploadThumbnailVM(this, options.upload_thumb_url);
        function handleError(sender: any, data: any) {
            self._handleError(sender, data);
        };
        //here we could process application's errors
        this.objEvents.addOnError(handleError);
        this._dbContext.objEvents.addOnError(handleError);
        this._dbContext.requestHeaders['RequestVerificationToken'] = COMMON.getAntiForgeryToken();
        // adding event handler for our custom event
        this._uploadVM.addOnFilesUploaded(function (s, a) {
            //need to update ThumbnailPhotoFileName
            a.product._aspect.refresh();
        });

        super.onStartUp();
    }
    private _initSignalR(): RIAPP.IPromise<void> {
        const self = this, options: IMainOptions = self.options;

        if (!!self._signalrPromise)
            return self._signalrPromise;

        const deferred = RIAPP.Utils.defer.createDeferred<void>();

        // instead of server side events i added signalR
        if (!options.sse_url) {
            deferred.reject();
            return deferred.promise();
        }

      
        self._signalrPromise = deferred.promise();

        // load dynamically signalR module
        require(['signalr'], (signalr: typeof _signalR) => {
            try {
                const hubBuilder = new signalr.HubConnectionBuilder();
                this._hubConnection = hubBuilder
                    .withUrl(options.sse_url)
                    .configureLogging(signalr.LogLevel.Information)
                    .build();

                this._hubConnection.onclose((error?: Error) => {
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
        }, (err: any) => {
            deferred.reject(err);
            // self.handleError(err, self);
            });

        return self._signalrPromise;
    }
    private _handleError(sender: any, data: any) {
        debugger;
        data.isHandled = true;
        this.errorVM.error = data.error;
        this.errorVM.showDialog();
    }
    private _onNewQuote(quote: string) {
        this._sseMessage = quote;
        this.objEvents.raiseProp('sseMessage');
    }
    //really, the dispose method is redundant here because the application lives while the page lives
    dispose() {
        if (this.getIsDisposed())
            return;
        this.setDisposing();
        const self = this;
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
        } finally {
            super.dispose();
        }
    }
    get options() { return <IMainOptions>this._options; }
    get dbContext() { return this._dbContext; }
    get errorVM() { return this._errorVM; }
    get headerVM() { return this._headerVM; }
    get productVM() { return this._productVM; }
    get uploadVM() { return this._uploadVM; }
    //server side signalR message
    get sseMessage() { return this._sseMessage; }
    get hubConnection() { return this._hubConnection; }
    get openHubCommand(): RIAPP.ICommand { return this._openHubCommand; }
    get closeHubCommand(): RIAPP.ICommand { return this._closeHubCommand; }
}