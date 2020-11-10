declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*.gif';
declare module '*.yaml';
declare module '*.yml';
declare module '*.css';

declare namespace Typing {
    export type IKeyValue<K, V> = {
        key: K;
        value: V;
    };

    export type IDictionary<K, V> = {
        [key in K]: V;
    };

    export type Maybe<T> = T | null;

    export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
}
