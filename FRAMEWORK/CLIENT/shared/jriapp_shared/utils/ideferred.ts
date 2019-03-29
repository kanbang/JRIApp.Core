﻿/** The MIT License (MIT) Copyright(c) 2016-present Maxim V.Tsapov */
export const enum PromiseState { Pending, ResolutionInProgress, Resolved, Rejected }

export interface IPromiseState {
    state(): PromiseState;
}

export interface ITaskQueue {
    enque(task: () => void): number;
    cancel(taskId: number): void;
}

export interface IAbortable {
    abort(reason?: string): void;
}

export interface IThenable<T> {
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | IThenable<TResult2>) | undefined | null): IThenable<TResult1 | TResult2>;
}

export interface IPromise<T> extends IThenable<T> {
    then<TResult1 = T, TResult2 = never>(
        onFulfilled?: ((value: T) => TResult1 | IThenable<TResult1>) | undefined | null,
        onRejected?: ((reason: any) => TResult2 | IThenable<TResult2>) | undefined | null
    ): IPromise<TResult1 | TResult2>;
    catch<TResult = never>(
        onRejected?: ((reason: any) => TResult | IThenable<TResult>) | undefined | null
    ): IPromise<T | TResult>;
    finally<U = any>(onFinally?: ((value: any) => U)): IPromise<U>;
}

export interface IVoidPromise extends IPromise<void> {
}

export interface IDeferred<T> {
    resolve(value?: IThenable<T>): IPromise<T>;
    resolve(value?: T): IPromise<T>;
    reject(error?: any): IPromise<T>;
    promise(): IPromise<T>;
}

export interface IStatefulPromise<T> extends IPromise<T>, IPromiseState {
    then<TResult1 = T, TResult2 = never>(
        onFulfilled?: ((value: T) => TResult1 | IThenable<TResult1>) | undefined | null,
        onRejected?: ((reason: any) => TResult2 | IThenable<TResult2>) | undefined | null
    ): IStatefulPromise<TResult1 | TResult2>;
    catch<TResult = never>(
        onRejected?: ((reason: any) => TResult | IThenable<TResult>) | undefined | null
    ): IStatefulPromise<T | TResult>;
    finally<U = any>(onFinally?: ((value: any) => U)): IStatefulPromise<U>;
}

export interface IAbortablePromise<T> extends IStatefulPromise<T>, IAbortable {
}

export interface IStatefulDeferred<T> extends IDeferred<T>, IPromiseState {
    resolve(value?: IThenable<T>): IStatefulPromise<T>;
    resolve(value?: T): IStatefulPromise<T>;
    reject(error?: any): IStatefulPromise<T>;
    promise(): IStatefulPromise<T>;
}
