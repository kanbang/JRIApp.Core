import * as RIAPP from "jriapp";
import * as dbMOD from "jriapp_db";
import * as uiMOD from "jriapp_ui";
import * as COMMON from "common";

import * as DEMODB from "../demo/demoDB";
import { BaseUploadVM } from "./baseUpload";

export class UploadThumbnailVM extends BaseUploadVM<RIAPP.Application> {
    private _product: DEMODB.Product;
    private _dialogVM: uiMOD.DialogVM;
    private _dialogCommand: RIAPP.ICommand;

    constructor(app: RIAPP.Application, url: string) {
        super(app, url);
        const self = this;
        this._product = null;
        // we defined this custom type in common.js
        this._dialogVM = new uiMOD.DialogVM(app);
        const dialogOptions: uiMOD.IDialogConstructorOptions = {
            templateID: 'uploadTemplate',
            width: 550,
            height: 300,
            title: 'Upload Product Thumbnail',
            fn_OnTemplateCreated: function (this: uiMOD.DataEditDialog, template) {
                self._prepareTemplate(template, true);
            },
            fn_OnShow: function (dialog: uiMOD.DataEditDialog) {
                self._initUI();
            },
            fn_OnClose: function (dialog: uiMOD.DataEditDialog) {
                if (dialog.result == 'ok' && self._onDialogClose()) {
                    //raise our custom event
                    self.objEvents.raise('files_uploaded', { id: self.id, product: self._product });
                }
            }
        };
        // dialogs are distinguished by their given names
        this._dialogVM.createDialog('uploadDialog', dialogOptions);
        // shows dialog when executed
        this._dialogCommand = new RIAPP.Command<DEMODB.Product>(function (product) {
            try {
                // using command parameter to provide the product item
                self._product = product;
                self.id = self._product.ProductId.toString();
                self._dialogVM.showDialog('uploadDialog', self);
            } catch (ex) {
                self.handleError(ex, self);
            }
        });
    }
    protected _onDialogClose(): boolean {
        return this.fileUploaded;
    }
    protected _addHeaders(xhr: XMLHttpRequest, file: File): RIAPP.IPromise<void> {
        const res = super._addHeaders(xhr, file);
        xhr.setRequestHeader('RequestVerificationToken', COMMON.getAntiForgeryToken());
        return res;
    }
    // override
    endEdit(): boolean {
        return this._onDialogClose();
    }
    addOnFilesUploaded(fn: (sender: UploadThumbnailVM, args: { id: string; product: dbMOD.IEntityItem; }) => void, nmspace?: string): void {
        this.objEvents.on('files_uploaded', fn, nmspace);
    }
    offOnFilesUploaded(nmspace?: string): void {
        this.objEvents.off('files_uploaded', nmspace);
    }
    get dialogCommand(): RIAPP.ICommand {
        return this._dialogCommand;
    }
    dispose(): void {
        if (this.getIsDisposed())
            return;
        this.setDisposing();
        this._dialogVM.dispose();
        this._dialogVM = null;
        super.dispose();
    }
}