import * as RIAPP from "jriapp_shared";

const utils = RIAPP.Utils, _async = utils.async;

export interface IAddHeadersArgs {
    xhr: XMLHttpRequest;
    promise: RIAPP.IPromise<any>;
}

export class Uploader extends RIAPP.BaseObject {
    private _uploadUrl: string;
    private _file: File;

    constructor(uploadUrl: string, file: File) {
        super();
        this._uploadUrl = uploadUrl;
        this._file = file;
    }
    addOnProgress(fn: (sender: Uploader, args: number) => void, nmspace?: string) {
        this.objEvents.on('progress', fn, nmspace);
    }
    addOnAddHeaders(fn: (sender: Uploader, args: IAddHeadersArgs) => void, nmspace?: string) {
        this.objEvents.on('addheaders', fn, nmspace);
    }
    uploadFile(): RIAPP.IPromise<string> {
        const self = this, file = this._file, data = new FormData();
        data.append('file', file);
        return self._uploadFile(file, data).then(() => file.name);
    }
    protected _uploadFile(file: File, formData: FormData): RIAPP.IPromise<void> {
        const self = this, xhr = new XMLHttpRequest(), upload = xhr.upload;
        xhr.responseType = "text";
        const deffered = _async.createDeferred<void>();
        upload.onload = function (e) {
            // allow promise first to reject if error occured
            _async.delay(() => deffered.resolve(), 100);
        };
        upload.onprogress = function (e: ProgressEvent) {
            self.objEvents.raise('progress', e.loaded / e.total);
        };
        upload.onerror = function (e) {
            deffered.reject(new Error("Uploading file " + file.name + " error"));
        };
        xhr.open("post", self.uploadUrl, true);
        const name = encodeURIComponent(file.name);
        xhr.setRequestHeader("X-File-Name", name);
        xhr.setRequestHeader("X-File-Size", file.size.toString());
        xhr.setRequestHeader("X-File-Type", file.type);
        const args: IAddHeadersArgs = { xhr: xhr, promise: null };
        self.objEvents.raise('addheaders', args);
        const addHeadersPromise = !args.promise ? _async.resolve() : args.promise;
        return addHeadersPromise.then(() => {
            xhr.send(formData);
            return deffered.promise();
        });
    }
    get uploadUrl() { return this._uploadUrl; }
    get fileName() { return this._file.name }
}