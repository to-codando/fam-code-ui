import { TError } from "./types";
export declare const createActions: () => {
    validate: (type: string) => TError | null;
    throwError: (error: TError) => void;
    getError: (type: string) => TError;
};
//# sourceMappingURL=actions.d.ts.map