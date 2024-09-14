export type TError = {
    isValid: boolean;
    message: string;
    typeError: string;
};
export type Actions = {
    validate: (value: string) => TError | null;
    throwError: (value: TError) => void;
    getError: (type: string) => TError;
};
export type templateParams = {
    props: {
        stroke: number;
        type: string;
    };
};
//# sourceMappingURL=types.d.ts.map