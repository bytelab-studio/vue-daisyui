<script setup lang="ts">
import {computed} from "vue";
import type {Menu} from "./Menu";


const props = defineProps<Menu.Props>();
const classes = computed(() => [
    "menu",
    {
        "menu-vertical lg:menu-horizontal": props.responsive,
        "menu-xl": props.size == "xl",
        "menu-lg": props.size == "lg",
        "menu-md": props.size == "md",
        "menu-sm": props.size == "sm",
        "menu-xs": props.size == "xs",
        "menu-vertical": !props.horizontal,
        "menu-horizontal": props.horizontal
    }
]);
</script>

<template>
    <ul role="menu" :data-theme="props.dataTheme" :class="classes">
        <slot />
    </ul>
</template>