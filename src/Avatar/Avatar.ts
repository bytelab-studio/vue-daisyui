import type { ComponentColor, ComponentShape, ComponentSize, IComponentBaseProps } from "../types";

export namespace Avatar {
    export interface Props extends IComponentBaseProps {
        src?: string;
        letters?: string;
        size?: ComponentSize | number;
        shape?: ComponentShape;
        color?: Exclude<ComponentColor, "ghost">;
        border?: boolean;
        borderColor?: Exclude<ComponentColor, "ghost">;
        online?: boolean;
        offline?: boolean;
        innerClass?: string;
    }
}