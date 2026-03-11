import type { ComponentSize, IComponentBaseProps } from "../types";

export namespace Menu {
    export interface Props extends IComponentBaseProps {
        horizontal?: boolean;
        responsive?: boolean;
        size?: ComponentSize;
    }
}