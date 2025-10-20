<template>
    <ul :class="appliedClasses" popover :id="popoverId" :style="`position-anchor:${anchorId}`">
        <slot/>
    </ul>
</template>

<script setup lang="ts">
import classes from "@logic/classes";
import {computed, type ComputedRef, inject} from "vue";
import {useDropdown} from "@logic/hooks/dropdown.ts";
import type {Alignments, Orientations} from "@logic/consts";

const props = withDefaults(defineProps<{
    orientation?: Orientations;
    align?: Alignments;
}>(), {
    orientation: "bottom",
});

const appliedClasses: ComputedRef<string[]> = computed(() => {
    const appliedClasses: string[] = [classes.value.dropdown.component, 'bg-base-100 rounded-box z-1 p-2 shadow-sm menu'];

    appliedClasses.push(classes.value.dropdown.placement[props.orientation]);

    if (props.align) {
        appliedClasses.push(classes.value.dropdown.placement[props.align]);
    }

    return appliedClasses;
});

const dropdown = useDropdown();

const popoverId = inject<string>(dropdown.popover);
const anchorId = inject<string>(dropdown.anchor);

if (!popoverId || !anchorId) {
    throw "Could not find dropdown context";
}

</script>