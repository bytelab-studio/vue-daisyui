<template>
    <div :class="appliedClasses">
        <input type="radio" :name="accordionName" />
        <slot />
    </div>
</template>

<script setup lang="ts">
import {computed, type ComputedRef, inject} from "vue";
import classes from "@logic/classes";
import {useAccordion} from "@logic/hooks/accordion";

const accordion = useAccordion();

const props = withDefaults(defineProps<{
    variant?: "arrow" | "plus";
}>(), {
    variant: "arrow"
});

const accordionName = inject<string>(accordion.name);
const accordionJoined = inject<boolean>(accordion.joined);

if (!accordionName) {
    throw "Could not find modal context";
}

const appliedClasses: ComputedRef<string[]> = computed(() => {
    const appliedClasses: string[] = [classes.value.collapse.component, "bg-base-100 border border-solid border-base-300"];

    appliedClasses.push(classes.value.collapse.modifier[props.variant]);

    if (accordionJoined) {
        appliedClasses.push("join-item");
    } else {
        appliedClasses.push("mt-2");
    }

    return appliedClasses;
});
</script>
