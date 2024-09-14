import { templateParams } from "./types";
export declare const FamDivider: () => {
    template: ({ props }: templateParams) => import("iares").HTMType<any, any, any> | import("iares").HTMType<any, any, any>[];
    styles: () => string;
    actions: {
        validate: (type: string) => import("./types").TError | null;
        throwError: (error: import("./types").TError) => void;
        getError: (type: string) => import("./types").TError;
    };
    hooks: {
        afterRender: (element: Element) => void;
    };
};
//# sourceMappingURL=index.d.ts.map