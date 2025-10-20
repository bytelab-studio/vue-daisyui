<template>
    <button :class="appliedClasses">
        <slot/>
    </button>
</template>

<script setup lang="ts">
import type {Colors, Sizes} from "@logic/consts";
import {computed, type ComputedRef} from "vue";
import classes from "@logic/classes";

const props = defineProps<{
    color: Colors;
    size?: Sizes;
    variant?: "outline" | "dash" | "soft" | "ghost" | "link";
    behavior?: "active" | "disabled";
    modifier?: "wide" | "block" | "square" | "circle";
}>();

const appliedClasses: ComputedRef<string[]> = computed(() => {
    const appliedClasses: string[] = [classes.value.button.component];
    appliedClasses.push(classes.value.button.color[props.color]);

    if (props.size) {
        appliedClasses.push(classes.value.button.size[props.size]);
    }
    if (props.variant) {
        appliedClasses.push(classes.value.button.variant[props.variant]);
    }
    if (props.behavior) {
        appliedClasses.push(classes.value.button.behavior[props.behavior]);
    }
    if (props.modifier) {
        appliedClasses.push(classes.value.button.modifier[props.modifier]);
    }

    return appliedClasses;
});
</script>