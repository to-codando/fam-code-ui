import { templateParams } from "./types";
export declare const FamIcon: () => {
    template: ({ props }: templateParams) => import("iares").HTMType<any, any, any> | import("iares").HTMType<any, any, any>[];
    styles: () => string;
    hooks: {
        afterRender: (element: Element) => void;
    };
    actions: {
        validate: (value: string) => import("../../services/validator/types").TError | null;
        throwError: (error: import("../../services/validator/types").TError) => void;
        getError: () => import("../../services/validator/types").TError;
    };
};
//# sourceMappingURL=index.d.ts.map