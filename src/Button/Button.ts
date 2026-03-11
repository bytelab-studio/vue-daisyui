import type { ComponentColor, ComponentShape, ComponentSize, ComponentVariant, IComponentBaseProps } from "../types";

export namespace Button {
    export interface Props extends IComponentBaseProps {
        shape?: ComponentShape;
        size?: ComponentSize;
        color?: ComponentColor;
        variant?: ComponentVariant | "link";
        wide?: boolean;
        fullWidth?: boolean;
        responsive?: boolean;
        animation?: boolean;
        active?: boolean;
        disabled?: boolean;
    }
}