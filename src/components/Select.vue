<template>
    <select :class="appliedClasses" :value="props.modelValue" @change="emitValue">
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
    modelValue?: string;
}>();

const emit = defineEmits<{
    'update:model-value': [string]
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

function emitValue(e: Event) {
    emit("update:model-value", (e.target as HTMLSelectElement).value)
}
</script>