import * as RIAPP from "jriapp";
import * as React from "react";
import * as Redux from 'redux';
import { ReactElView, mergeOptions } from "./react";
import { ITabContent } from "../abstractions/tabs";
import { Action, ActionTypes, propertyChanged } from "../actions/common";
import Tabs from "../components/tabs";

export interface ITabsViewOptions extends RIAPP.IViewOptions
{
    activeTabName?: string;
    tabs?: ITabContent[];
}

interface IState {
    activeTabName: string;
    tabs: ITabContent[]
}

const _reducer = (initialState: IState, state: IState, action: Redux.Action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_PROP:
            return {
                ...state,
                [(action as Action).name]: (action as Action).value
            };
        default:
            return state || initialState;
    }
};
const reducer = (initialState: IState) => (state: IState, action: Redux.Action) => _reducer(initialState, state, action);
const defaults = { activeTabName: "", tabs: [] as ITabContent[] } as IState;


export class TabsElView extends ReactElView<IState> {
    constructor(el: HTMLElement, options: ITabsViewOptions) {
        const initialState = mergeOptions(options, defaults);
        super(el, options, reducer(initialState));
    }
    // override
    storeChanged(current: IState, previous: IState): boolean {
        let shouldRerender = false;
        if (current.activeTabName !== previous.activeTabName) {
            this.objEvents.raiseProp("activeTabName");
            shouldRerender = true;
        }

        if (current.tabs !== previous.tabs) {
            this.objEvents.raiseProp("tabs");
            shouldRerender = true;
        }

        return shouldRerender;
    }
    // override
    getMarkup(): JSX.Element {
        return (
            <Tabs onClick={(name: string) => { this.activeTabName = name; }} activeName={this.activeTabName} tabs={this.tabs} />
        );
    }
    get activeTabName(): string {
        return this.state.activeTabName;
    }
    set activeTabName(v: string) {
        this.dispatch(propertyChanged<string, IState>("activeTabName", v));
    }
    get tabs(): ITabContent[] {
        return this.state.tabs;
    }
    set tabs(v: ITabContent[]) {
        this.dispatch(propertyChanged<ITabContent[], IState>("tabs", v));
    }
    toString(): string {
        return "TabsElView";
    }
}

export function initModule(app: RIAPP.Application) {
    app.registerElView("tabsview", TabsElView);
}