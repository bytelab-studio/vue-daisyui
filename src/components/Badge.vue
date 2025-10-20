<template>
    <div :class="appliedClasses">
        <slot />
    </div>
</template>

<script setup lang="ts">
import type {Colors, Sizes} from "@logic/consts";
import {computed, type ComputedRef} from "vue";
import classes from "@logic/classes";

const props = defineProps<{
    color: Colors;
    size?: Sizes;
    variant?: "outline" | "dash" | "soft" | "ghost";
}>();

const appliedClasses: ComputedRef<string[]> = computed(() => {
    const appliedClasses: string[] = [classes.value.badge.component];
    appliedClasses.push(classes.value.badge.color[props.color]);

    if (props.size) {
        appliedClasses.push(classes.value.badge.size[props.size]);
    }
    if (props.variant) {
        appliedClasses.push(classes.value.badge.variant[props.variant]);
    }
    
    return appliedClasses;
});
</script>