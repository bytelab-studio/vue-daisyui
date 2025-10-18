/**
 * Description: This file contains code fragments from reka-ui. See below comments to get exact code source.
 *              The code might be diffrent to the original, because of modification
 *
 * License:     MIT
 */

import { cloneVNode, Comment, defineComponent, mergeProps, Fragment } from "vue";
import type { VNode } from "vue";

// region https://github.com/unovue/reka-ui/blob/v2/packages/core/src/shared/renderSlotFragments.ts
export function renderSlotFragments(children?: VNode[]): VNode[] {
    if (!children)
        return [];
    return children.flatMap((child) => {
        if (child.type === Fragment)
            return renderSlotFragments(child.children as VNode[]);

        return [child];
    });
}
// endregion

// region https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Primitive/Slot.ts
export const PrimitiveSlot = defineComponent({
    name: "PrimitiveSlot",
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
        return () => {
            if (!slots.default)
                return null;

            const children: VNode[] = renderSlotFragments(slots.default());
            const firstNonCommentChildrenIndex: number = children.findIndex(child => child.type !== Comment);
            if (firstNonCommentChildrenIndex === -1)
                return children;

            const firstNonCommentChildren: VNode = children[firstNonCommentChildrenIndex] as VNode;

            // Remove props ref from being inferred
            delete firstNonCommentChildren.props?.ref;

            // Manually merge props to ensure `firstNonCommentChildren.props`
            // has higher priority than `attrs` and can override `attrs`.
            // Otherwise `cloneVNode(firstNonCommentChildren, attrs)` will
            // prioritize `attrs` and override `firstNonCommentChildren.props`.
            const mergedProps = firstNonCommentChildren.props
                ? mergeProps(attrs, firstNonCommentChildren.props)
                : attrs;
            const cloned: VNode = cloneVNode({ ...firstNonCommentChildren, props: {} }, mergedProps);

            if (children.length === 1)
                return cloned;

            children[firstNonCommentChildrenIndex] = cloned;
            return children;
        }
    },
});
// endregion