import { HtmlInputEvent } from "../../utils/types";
export type Params = {
    props: {
        handler: (event: HtmlInputEvent) => void;
        debounceTime: number;
        type: "text" | "email" | "tel" | "password" | "date" | "datetime-local";
        value: string;
        label: string;
        isValid: boolean;
        error: string;
    };
};
export type ErrorInputParams = {
    props: {
        isValid: boolean;
        error: string;
    };
};
//# sourceMappingURL=types.d.ts.map