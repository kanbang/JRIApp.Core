import * as RIAPP from "jriapp";
import * as uiMOD from "jriapp_ui";

const $ = uiMOD.$;

export class MonthPickerElView extends uiMOD.TextBoxElView {
    constructor(el: HTMLInputElement, options: any) {
        super(el, options);
        const self = this, $el: any = $(this.el);
        $el.MonthPicker({
            OnAfterChooseMonth: function (selectedDate: any) {
                self.objEvents.raiseProp("value");
            },
            Button: "<button class='btn-sm btn-outline-secondary input-group-btn'><i class='fas fa-ellipsis-h'></i></button>"
        });
    }
    dispose() {
        if (this.getIsDisposed())
            return;
        this.setDisposing();
        const $el = $(this.el);
        uiMOD.JQueryUtils.dispose$Plugin($el, "MonthPicker");
        super.dispose();
    }
    toString() {
        return "MonthPickerElView";
    }
}

// this function is executed when an application which uses this module is created
export function initModule(app: RIAPP.Application) {
    app.registerElView("monthpicker", MonthPickerElView);
}