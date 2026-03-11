import type { IComponentBaseProps } from "../types";

export namespace MenuItem {
    export interface Props extends IComponentBaseProps {
        focus?: boolean;
        active?: boolean;
        disabled?: boolean;
    }
}