type HtmlInputEvent = Event & {
    target: HTMLInputElement;
};
type Props = {
    props: {
        label: string;
        isChecked: boolean;
        handler: (event: HtmlInputEvent) => void;
    };
};
export declare const FamCheckBox: () => {
    template: ({ props }: Props) => import("iares").HTMType<any, any, any> | import("iares").HTMType<any, any, any>[];
    styles: () => string;
};
export {};
//# sourceMappingURL=index.d.ts.map