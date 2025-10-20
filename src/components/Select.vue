<template>
    <select :class="appliedClasses">
        <slot />
    </select>
</template>

<script setup lang="ts">
import type {Colors, Sizes} from "@logic/consts";
import {computed, type ComputedRef} from "vue";
import classes from "@logic/classes";

const props = defineProps<{
    color: Colors;
    size?: Sizes;
    variant?: "ghost";
}>();

const appliedClasses: ComputedRef<string[]> = computed(() => {
    const appliedClasses: string[] = [classes.value.select.component];
    appliedClasses.push(classes.value.select.color[props.color]);

    if (props.size) {
        appliedClasses.push(classes.value.select.size[props.size]);
    }
    if (props.variant) {
        appliedClasses.push(classes.value.select.variant[props.variant]);
    }
    
    return appliedClasses;
});
</script>