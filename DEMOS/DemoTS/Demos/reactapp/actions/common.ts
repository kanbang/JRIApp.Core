export interface Action<T = any, S = any> {
    type: string;
    name: keyof S;
    value: T;
}

export const enum ActionTypes {
    CHANGE_PROP = "CHANGE_PROP"
}

export function propertyChanged<T, S>(name: keyof S, value: T): Action<T, S> {
    return { type: ActionTypes.CHANGE_PROP, name: name, value: value };
}