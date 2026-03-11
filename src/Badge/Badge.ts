import type { ComponentColor, ComponentSize, ComponentVariant, IComponentBaseProps } from "../types";

export namespace Badge {
    export interface Props extends IComponentBaseProps {
        size?: ComponentSize;
        color?: ComponentColor;
        variant?: ComponentVariant;
        responsive?: boolean;
    }
}