interface IJSONObject {
    [key: string]: string | number | boolean | null | undefined | IJSONObject;
}
export declare function sort(json: IJSONObject): IJSONObject;
export declare function unflatten(jsonTable: {
    [key: string]: string;
}): IJSONObject;
export declare function flatten(json: {
    [key: string]: any;
}, parentKey?: string): {
    [key: string]: string;
};
export {};
