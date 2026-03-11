<script setup lang="ts">
import {computed} from "vue";
import type {MenuItem} from "./MenuItem";

const props = defineProps<MenuItem.Props>();
const classes = computed(() => ({
    "menu-focus": props.focus,
    "menu-active": props.active,
    "menu-disabled": props.disabled
}));
</script>

<template>
    <li role="menuItem" :data-theme="props.dataTheme" :class="classes">
        <slot />
    </li>
</template>