import type { ComponentSize, ComponentVariant, IComponentBaseProps } from "../types";

export namespace Card {
    export interface Props extends IComponentBaseProps {
        size?: ComponentSize;
        border?: boolean;
        variant?: Exclude<ComponentVariant, "soft"> | "border";
        imageFull?: boolean;
        side?: boolean;
    }
}