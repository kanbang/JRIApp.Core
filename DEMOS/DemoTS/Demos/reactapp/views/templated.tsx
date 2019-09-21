import * as RIAPP from "jriapp";
import * as React from "react";
import * as Redux from 'redux';
import { ReactElView, mergeOptions } from "./react";
import { propertyChanged, Action, ActionTypes } from "../actions/templated";
import { ITemplatedState } from "../abstractions/templated";
import Template from "../components/template";

export interface ITemplatedViewOptions extends RIAPP.IViewOptions
{
    templateId?: string;
}

const rowStyle = {
    display: 'inline-block',
};

const _reducer = (initialState: ITemplatedState, state: ITemplatedState, action: Redux.Action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_PROP:
            return {
                ...state,
                [(action as Action<any>).name]: (action as Action<any>).value
            };
        default:
            return state || initialState;
    }
};
const reducer = (initialState: ITemplatedState) => (state: ITemplatedState, action: Redux.Action) => _reducer(initialState, state, action);
const defaults = { templateId: "" } as ITemplatedState;

/**
  Demo element view of a React component which renders the Template react components
 */
export class TemplatedElView extends ReactElView<ITemplatedState> {
    constructor(el: HTMLElement, options: ITemplatedViewOptions) {
        const initialState = mergeOptions(options, defaults);
        super(el, options, reducer(initialState));
    }
    // override
    storeChanged(current: ITemplatedState, previous: ITemplatedState): boolean {
        let shouldRerender = false;

        if (current.templateId !== previous.templateId) {
            this.objEvents.raiseProp("templateId");
            shouldRerender = true;
        }

        if (current.rows !== previous.rows) {
            this.objEvents.raiseProp("rows");
            shouldRerender = true;
        }

        return shouldRerender;
    }
    // override
    getMarkup(): JSX.Element {
        const model: ITemplatedState = this.state;
        return (
            <React.Fragment>
                {model.rows.map((row, index) => {
                    return (
                        <Template key={index} css="demo-row" style={rowStyle} templateId={model.templateId} dataContext={row} />
                    );
                })}
            </React.Fragment>
        );
    }
    get templateId(): string {
        return this.state.templateId;
    }
    set templateId(v: string) {
        this.dispatch(propertyChanged("templateId", v));
    }
    get rows(): object[] {
        return this.state.rows;
    }
    set rows(v: object[]) {
        this.dispatch(propertyChanged("rows", v));
    }
    toString(): string {
        return "TemplatedElView";
    }
}

export function initModule(app: RIAPP.Application) {
    app.registerElView("templatedview", TemplatedElView);
}