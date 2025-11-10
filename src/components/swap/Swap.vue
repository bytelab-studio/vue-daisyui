<template>
    <label :class="appliedClasses">
        <input ref="checkbox" type="checkbox"/>
        <slot/>
    </label>
</template>

<script setup lang="ts">
import classes from "@logic/classes.ts";
import {computed, type ComputedRef, useTemplateRef} from "vue";

const props = defineProps<{
    effect?: "flip" | "rotate"
}>();

const checkbox = useTemplateRef("checkbox");

const state: ComputedRef<"on" | "off"> = computed(() => checkbox.value && checkbox.value.checked ? "on" : "off");
const appliedClasses: ComputedRef<string[]> = computed(() => {
    const appliedClasses: string[] = [classes.value.swap.component];

    if (props.effect) {
        appliedClasses.push(classes.value.swap.style[props.effect]);
    }

    return appliedClasses;
});


function setState(state: "on" | "off"): void {
    if (!checkbox.value) {
        throw "Could not find swap checkbox element";
    }

    checkbox.value.checked = state == "on";
}

defineExpose({
    state,
    setState
});

</script>