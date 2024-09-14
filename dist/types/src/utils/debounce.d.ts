import { HtmlInputEvent } from "./types";
export type Thandler = {
    (args: HtmlInputEvent): void;
};
export type Handler = {
    (args: HtmlInputEvent): void;
};
export type Tdebounc = {
    (callback: Thandler | Handler, delay?: number): Thandler;
};
export declare const debounce: Tdebounc;
//# sourceMappingURL=debounce.d.ts.map