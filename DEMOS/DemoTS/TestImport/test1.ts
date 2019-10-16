import * as RIAPP from "jriapp";
import { DemoApplication } from "app";
import * as DEMODB from "domainModel";
import { initModule as registerExpander } from "expander";
import { initModule as registerMonthpicker } from "monthpicker";

const utils = RIAPP.Utils, dates = utils.dates;

declare var toastr: any;
toastr.success("Module loaded at " + moment().format('HH:mm:ss'), "test1 module loaded on demand");
console.log("test1 module loaded on demand");


const app = RIAPP.bootstrap.app as DemoApplication;
// console.log(app.TEXT);

export class UppercaseConverter extends RIAPP.BaseConverter {
    convertToSource(val: any, param: any, dataContext: any): any {
        if (utils.check.isString(val)) {
            return val.toLowerCase();
        } else {
            return val;
        }
    }
    convertToTarget(val: any, param: any, dataContext: any): any {
        if (utils.check.isString(val)) {
            return val.toUpperCase();
        } else {
            return val;
        }
    }
}
export class YearMonthConverter extends RIAPP.BaseConverter {
    convertToSource(val: any, param: string, dataContext: any): any {
        if (utils.check.isString(val)) {
            return dates.strToDate('01/' + val, 'DD/' + param);
        } else {
            return null;
        }
    }
    convertToTarget(val: any, param: string, dataContext: any): any {
        if (utils.check.isDate(val)) {
            return dates.dateToStr(val, param);
        } else {
            return "";
        }
    }
}
export class NotConverter extends RIAPP.BaseConverter {
    convertToSource(val: any, param: any, dataContext: any): any {
        return !val;
    }
    convertToTarget(val: any, param: any, dataContext: any): any {
        return !val;
    }
}

function fillMonths(dict: DEMODB.KeyValDictionary) {
    dict.fillItems([{ key: 1, val: 'January' }, { key: 2, val: 'February' }, { key: 3, val: 'March' },
    { key: 4, val: 'April' }, { key: 5, val: 'May' }, { key: 6, val: 'June' },
    { key: 7, val: 'July' }, { key: 8, val: 'August' }, { key: 9, val: 'September' }, { key: 10, val: 'October' },
    { key: 11, val: 'November' }, { key: 12, val: 'December' }], true);
}

app.registerConverter('uppercaseConverter', new UppercaseConverter());
app.registerConverter('yearmonthConverter', new YearMonthConverter());
app.registerConverter('notConverter', new NotConverter());
registerExpander(app);
registerMonthpicker(app);
fillMonths(app.months);