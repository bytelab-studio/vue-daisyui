<script setup lang="ts">
import {computed} from "vue";
import type {Badge} from "./Badge";

const props = defineProps<Badge.Props>();
const classes = computed(() => [
    "badge",
    {
        "badge-xl": props.size == "xl",
        "badge-lg": props.size == "lg",
        "badge-md": props.size == "md",
        "badge-sm": props.size == "sm",
        "badge-xs": props.size == "xs",
        "badge-soft": props.variant == "soft",
        "badge-outline": props.variant == "outline",
        "badge-neutral": props.color == "neutral",
        "badge-secondary": props.color == "secondary",
        "badge-accent": props.color == "accent",
        "badge-ghost": props.color == "ghost",
        "badge-info": props.color == "info",
        "badge-success": props.color == "success",
        "badge-warning": props.color == "warning",
        "badge-error": props.color == "error",
        "badge-xs md:badge-sm lg:badge-md xl:badge-lg": props.responsive
    }
]);
</script>

<template>
    <div aria-label="Badge" :data-theme="props.dataTheme" :class="classes">
        <slot />
    </div>
</template>