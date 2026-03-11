import {
    componentColors,
    componentLayouts,
    componentPositions,
    componentSizes,
    componentShapes,
    componentStatuses,
    componentVariants,
    backgroundColors,
    brandColors,
    defaultThemes
} from "./constants";

type NonCollapsingString = string & {};

export type DataTheme = typeof defaultThemes | NonCollapsingString;

export interface IComponentBaseProps {
    dataTheme?: DataTheme;
}

export type ComponentColor = typeof componentColors[number];
export type ComponentLayout = typeof componentLayouts[number];
export type ComponentPosition = typeof componentPositions[number];
export type ComponentShape = typeof componentShapes[number];
export type ComponentSize = typeof componentSizes[number];
export type ComponentStatus = typeof componentStatuses[number];
export type ComponentVariant = typeof componentVariants[number];
export type ComponentBrandColor = typeof brandColors[number];
export type ComponentBackgroundColor = typeof backgroundColors[number];

export type ListOrItem<T> = T[] | T | Array<T | T[]>;