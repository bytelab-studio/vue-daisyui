<script setup lang="ts">
import {computed} from "vue";
import type {Button} from "./Button";


const props = withDefaults(defineProps<Button.Props>(), {
    animation: true
});
const classes = computed(() => [
    "btn",
    {
        "btn-xl": props.size == "xl",
        "btn-lg": props.size == "lg",
        "btn-md": props.size == "md",
        "btn-sm": props.size == "sm",
        "btn-xs": props.size == "xs",
        "btn-circle": props.shape == "circle",
        "btn-square": props.shape == "square",
        "btn-soft": props.variant == "soft",
        "btn-dash": props.variant == "dash",
        "btn-outline": props.variant == "outline",
        "btn-link": props.variant == "link",
        "btn-neutral": props.color == "neutral",
        "btn-primary": props.color == "primary",
        "btn-secondary": props.color == "secondary",
        "btn-acccent": props.color == "accent",
        "btn-info": props.color == "info",
        "btn-success": props.color == "success",
        "btn-warning": props.color == "warning",
        "btn-error": props.color == "error",
        "btn-ghost": props.color == "ghost",
        "btn-wide": props.wide,
        "btn-block": props.fullWidth,
        "btn-xs sm:btn-sm md:btn-md lg:btn-lg": props.responsive,
        "no-animation": !props.animation,
        "btn-active": props.active,
        "btn-disabled": props.disabled
    }
]);
</script>

<template>
    <button :data-theme="props.dataTheme" :class="classes" :disabled="props.disabled">
        <slot />
    </button>
</template>