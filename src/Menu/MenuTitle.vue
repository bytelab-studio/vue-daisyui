<script setup lang="ts">
import {computed} from "vue";
import type {MenuTitle} from "./MenuTitle";

const props = defineProps<MenuTitle.Props>(); 
const classes = computed(() => [
    "menu-title" 
]);
</script>

<template>
    <li :data-theme="props.dataTheme" :class="classes">
        <slot />
    </li>
</template>
