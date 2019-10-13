var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "jriapp", "expander", "monthpicker"], function (require, exports, RIAPP, expander_1, monthpicker_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = RIAPP.Utils, dates = utils.dates;
    toastr.success("Module loaded at " + moment().format('HH:mm:ss'), "test1 module loaded on demand");
    console.log("test1 module loaded on demand");
    var app = RIAPP.bootstrap.app;
    var UppercaseConverter = (function (_super) {
        __extends(UppercaseConverter, _super);
        function UppercaseConverter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UppercaseConverter.prototype.convertToSource = function (val, param, dataContext) {
            if (utils.check.isString(val)) {
                return val.toLowerCase();
            }
            else {
                return val;
            }
        };
        UppercaseConverter.prototype.convertToTarget = function (val, param, dataContext) {
            if (utils.check.isString(val)) {
                return val.toUpperCase();
            }
            else {
                return val;
            }
        };
        return UppercaseConverter;
    }(RIAPP.BaseConverter));
    exports.UppercaseConverter = UppercaseConverter;
    var YearMonthConverter = (function (_super) {
        __extends(YearMonthConverter, _super);
        function YearMonthConverter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        YearMonthConverter.prototype.convertToSource = function (val, param, dataContext) {
            if (utils.check.isString(val)) {
                return dates.strToDate('01/' + val, 'DD/' + param);
            }
            else {
                return null;
            }
        };
        YearMonthConverter.prototype.convertToTarget = function (val, param, dataContext) {
            if (utils.check.isDate(val)) {
                return dates.dateToStr(val, param);
            }
            else {
                return "";
            }
        };
        return YearMonthConverter;
    }(RIAPP.BaseConverter));
    exports.YearMonthConverter = YearMonthConverter;
    var NotConverter = (function (_super) {
        __extends(NotConverter, _super);
        function NotConverter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NotConverter.prototype.convertToSource = function (val, param, dataContext) {
            return !val;
        };
        NotConverter.prototype.convertToTarget = function (val, param, dataContext) {
            return !val;
        };
        return NotConverter;
    }(RIAPP.BaseConverter));
    exports.NotConverter = NotConverter;
    function fillMonths(dict) {
        dict.fillItems([{ key: 1, val: 'January' }, { key: 2, val: 'February' }, { key: 3, val: 'March' },
            { key: 4, val: 'April' }, { key: 5, val: 'May' }, { key: 6, val: 'June' },
            { key: 7, val: 'July' }, { key: 8, val: 'August' }, { key: 9, val: 'September' }, { key: 10, val: 'October' },
            { key: 11, val: 'November' }, { key: 12, val: 'December' }], true);
    }
    app.registerConverter('uppercaseConverter', new UppercaseConverter());
    app.registerConverter('yearmonthConverter', new YearMonthConverter());
    app.registerConverter('notConverter', new NotConverter());
    expander_1.initModule(app);
    monthpicker_1.initModule(app);
    fillMonths(app.months);
});
