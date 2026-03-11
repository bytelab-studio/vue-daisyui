import type { ComponentLayout, ComponentStatus, ComponentVariant, IComponentBaseProps } from "../types";

export namespace Alert {
    export interface Prop extends IComponentBaseProps {
        layout?: ComponentLayout;
        status?: ComponentStatus;
        variant?: ComponentVariant;
    }
}
