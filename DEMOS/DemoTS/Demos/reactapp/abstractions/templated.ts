export interface ITemplatedState {
    rows: object[];
    templateId: string;
}

export interface ITemplatedProps<T> {
    model: T;
}