﻿import * as RIAPP from "jriapp";
import * as COMMON from "common";
import * as AUTOCOMPLETE from "autocomplete";
import { IMainOptions, DemoApplication } from "./app";

const bootstrap = RIAPP.bootstrapper;

//bootstrap error handler - the last resort (typically display message to the user)
bootstrap.objEvents.addOnError(function (_s, args) {
    debugger;
    alert(args.error.message);
});

export function start(mainOptions: IMainOptions) {
    mainOptions.modulesInits = {
        "COMMON": COMMON.initModule,
        "AUTOCOMPLETE": AUTOCOMPLETE.initModule
    };

    //create and start application here
    return bootstrap.startApp(() => {
        return new DemoApplication(mainOptions);
    }).then((app) => {
        return app.customerVM.load();
    });
}