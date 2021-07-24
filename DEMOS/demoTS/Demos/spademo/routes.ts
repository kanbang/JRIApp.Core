﻿import * as RIAPP from "jriapp";
import * as uiMOD from "jriapp_ui";
import * as ANIMATION from "./animation";

class DynaContentEvents implements uiMOD.IDynaContentEvents {
    constructor() {
    }
    viewChanged(args: uiMOD.TDynaContentViewChangeArgs): void {
        // just for testing
        console.log(`ViewChanged: ${args.previousView} => ${args.currentView}`);
    }
}

export class MainRoute extends RIAPP.BaseObject {
    private _custTemplName: string;
    private _custDetTemplName: string;
    private _viewName: string;
    private _animation: uiMOD.IDynaContentAnimation;
    private _viewEvents: uiMOD.IDynaContentEvents;

    constructor() {
        super();
        this._custTemplName = 'custGroup.SPAcustTemplate';
        this._custDetTemplName = 'custGroup.SPAcustDetailTemplate';
        this._viewName = this._custTemplName;
        this._animation = new ANIMATION.FadeAnimation(true);
        this._viewEvents = new DynaContentEvents();
    }
    goToAllCust() {
        this.viewName = this.custTemplName;
    }
    goToCustDet() {
        this.viewName = this.custDetTemplName;
    }
    reset() {
        this.viewName = this._custTemplName;
    }
    get animation() { return this._animation; }
    set animation(v) {
        if (v !== this._animation) {
            this._animation = v;
            this.objEvents.raiseProp('animation');
        }
    }
    get viewName() { return this._viewName; }
    set viewName(v) {
        if (v !== this._viewName) {
            this._viewName = v;
            this.objEvents.raiseProp('viewName');
        }
    }
    get custTemplName() { return this._custTemplName; }
    get custDetTemplName() { return this._custDetTemplName; }
    // this property  will provide events through the constructor of the DynaContenElView (using the options to pass it to the constructor)
    // we will get the notifications when a new template set in (the view is changed asynchronously)
    get viewEvents() {
        return this._viewEvents;
    }
}

export class CustDetRoute extends RIAPP.BaseObject {
    private _infoTemplName: string;
    private _adrTemplName: string;
    private _viewName: string;
    private _animation: uiMOD.IDynaContentAnimation;

    constructor() {
        super();
        this._infoTemplName = 'custInfoGroup.customerInfo';
        this._adrTemplName = 'custAdrGroup.customerAddr';
        this._viewName = this._infoTemplName;
        this._animation = new ANIMATION.SlideAnimation(false);
    }
    goToCustInfo() {
        this.viewName = this.infoTemplName;
    }
    goToAdrInfo() {
        this.viewName = this.adrTemplName;
    }
    reset() {
        this.viewName = this._infoTemplName;
    }
    get animation() { return this._animation; }
    set animation(v) {
        if (v !== this._animation) {
            this._animation = v;
            this.objEvents.raiseProp('animation');
        }
    }
    get viewName() { return this._viewName; }
    set viewName(v) {
        if (v !== this._viewName) {
            this._viewName = v;
            this.objEvents.raiseProp('viewName');
        }
    }
    get infoTemplName() { return this._infoTemplName; }
    get adrTemplName() { return this._adrTemplName; }
}

export class AddressRoute extends RIAPP.BaseObject {
    private readonly _linkAdrTemplate: string;
    private readonly _newAdrTemplate: string;
    private _viewName: string;

    constructor() {
        super();
        this._linkAdrTemplate = 'custAdrGroup.linkAdrTemplate';
        this._newAdrTemplate = 'custAdrGroup.newAdrTemplate';
        this._viewName = this._linkAdrTemplate;
    }
    goToLinkAdr() {
        this.viewName = this.linkAdrTemplate;
    }
    goToNewAdr() {
        this.viewName = this.newAdrTemplate;
    }
    get viewName(): string { return this._viewName; }
    set viewName(v: string) {
        if (v !== this._viewName) {
            this._viewName = v;
            this.objEvents.raiseProp('viewName');
            this.objEvents.raiseProp('isSearchVisible');
        }
    }
    get linkAdrTemplate(): string { return this._linkAdrTemplate; }
    get newAdrTemplate(): string { return this._newAdrTemplate; }
    get isSearchVisible(): boolean {
        return this.viewName == this._linkAdrTemplate;
    }
}