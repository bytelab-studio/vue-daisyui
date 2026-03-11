<script setup lang="ts">
import {computed} from "vue";
import type {MenuDropdown} from "./MenuDropdown";

const props = defineProps<MenuDropdown.Props>();
const labelClasses = computed(() => [
    "menu-dropdown-toggle",
    {
        "menu-dropdown-show": props.open
    }
]);
const itemClasses = computed(() => [
    "menu-dropdown",
    {
        "menu-dropdown-show": props.open
    }
]);

</script>

<template>
    <span :class="labelClasses">
        <slot name="label" />
    </span>
    <ul :class="itemClasses">
        <slot name="items" />
    </ul>
</template>