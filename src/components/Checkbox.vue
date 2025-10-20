<template>
    <label :class="classes.checkbox.part.label">
        <input v-bind="$attrs" type="checkbox" :class="appliedClasses"/>
        <slot />
    </label>
</template>

<script setup lang="ts">
import type {Colors, Sizes} from "@logic/consts";
import {computed, type ComputedRef} from "vue";
import classes from "@logic/classes";

const props = defineProps<{
    color: Colors;
    size?: Sizes;
}>();

const appliedClasses: ComputedRef<string[]> = computed(() => {
    const appliedClasses: string[] = [classes.value.checkbox.component];
    appliedClasses.push(classes.value.checkbox.color[props.color]);

    if (props.size) {
        appliedClasses.push(classes.value.checkbox.size[props.size]);
    }

    return appliedClasses;
});
</script>