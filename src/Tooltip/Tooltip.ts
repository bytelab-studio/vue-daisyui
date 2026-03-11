import type { ComponentColor, ComponentPosition, IComponentBaseProps } from "../types";

export namespace Tooltip {
    export interface Props extends IComponentBaseProps {
        message: string;
        open?: boolean;
        color?: ComponentColor;
        position?: ComponentPosition;
    }
}

