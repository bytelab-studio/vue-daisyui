<script setup lang="ts">
import { computed } from "vue";
import type { Card } from "./Card";


const props = defineProps<Card.Props>();
const classes = computed(() => [
    "card",
    {
        "card-xl": props.size == "xl",
        "card-lg": props.size == "lg",
        "card-md": props.size == "md",
        "card-sm": props.size == "sm",
        "card-xs": props.size == "xs",
        "card-dash": props.variant == "dash",
        "card-border": props.border || props.variant == "outline" || props.variant == "border",
        "image-full": props.imageFull,
        "card-side": props.side
    }
]);
</script>

<template>
    <div aria-label="Card" :data-theme="props.dataTheme" :class="classes">
        <slot />
    </div>
</template>