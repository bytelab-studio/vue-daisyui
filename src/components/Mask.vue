<template>
    <PrimitiveSlot :class="appliedClasses">
        <slot />
    </PrimitiveSlot>
</template>

<script lang="ts" setup>
import {type ComputedRef, computed} from "vue";
import classes from "@logic/classes";
import {PrimitiveSlot} from "./PrimitiveSlot";

type MaskTypes = 
    | "squircle"
    | "heart"
    | "hexagon"
    | "hexagon2"
    | "decagon"
    | "pentagon"
    | "diamond"
    | "square"
    | "circle"
    | "star"
    | "star2"
    | "triangle"
    | "triangle2"
    | "triangle3"
    | "triangle4";

const props = defineProps<{
    type: MaskTypes;
    modifier?: "half1" | "half2";
}>();

const appliedClasses: ComputedRef<string[]> = computed(() => {
    const appliedClasses: string[] = [classes.value.mask.component, classes.value.mask.variant[props.type]];

    if (props.modifier) {
        appliedClasses.push(classes.value.mask.modifier[props.modifier]);
    }

    return appliedClasses;
});

</script>