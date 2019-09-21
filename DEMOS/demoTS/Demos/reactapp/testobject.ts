import * as RIAPP from "jriapp";

const demoRows: object[] = [{ num: 1, someVal: "someVal1" }, { num: 2, someVal: "someVal2" }, { num: 3, someVal: "someVal3" }, { num: 4, someVal: "someVal4" }, { num: 5, someVal: "someVal5" }];

export class TestObject extends RIAPP.ViewModel<RIAPP.Application> {
    private _testValue: string;
    private _page: number;
    private _rows: object[];

    constructor(app: RIAPP.Application) {
        super(app);
        this._testValue = "0";
        this._page = 1;
        this._rows = demoRows;
    }
    dispose(): void {
        if (this.getIsDisposed()) {
            return;
        }
        this.setDisposing();
        super.dispose();
    }
    get testValue(): string {
        return this._testValue;
    }
    set testValue(v: string) {
        if (this._testValue !== v) {
            this._testValue = v;
            this.objEvents.raiseProp("testValue");
        }
    }

    get rows(): object[] {
        return this._rows;
    }
    set rows(v: object[]) {
        if (this._rows !== v) {
            this._rows = v;
            this.objEvents.raiseProp("rows");
        }
    }

    get page(): number {
        return this._page;
    }
    set page(v: number) {
        if (this._page !== v) {
            this._page = v;
            this.objEvents.raiseProp("page");
        }
    }
}