<template>
    <PrimitiveSlot :class="appliedClasses">
        <slot/>
    </PrimitiveSlot>
</template>

<script setup lang="ts">
import classes from "@logic/classes";
import {PrimitiveSlot} from "@components/PrimitiveSlot";
import {computed, type ComputedRef} from "vue";

const props = defineProps<{
    state: "on" | "off";
}>();

const appliedClasses: ComputedRef<string[]> = computed(() => classes.value.swap.part[props.state]);
</script>