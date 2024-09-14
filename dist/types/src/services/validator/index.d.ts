import { TError } from "./types";
export declare const validatorFactory: () => {
    validate: (value: string) => TError | null;
    throwError: (error: TError) => void;
    getError: () => TError;
};
//# sourceMappingURL=index.d.ts.map