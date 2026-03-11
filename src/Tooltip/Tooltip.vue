<script setup lang="ts">
import {computed} from "vue";
import type { Tooltip } from "./Tooltip";

const props = defineProps<Tooltip.Props>();

const classes = computed(() => [
        "tooltip",
        {
            "tooltip-open": props.open,
            "tooltip-primary": props.color == "primary",
            "tooltip-secondary": props.color == "secondary",
            "tooltip-accent": props.color == "accent",
            "tooltip-info": props.color == "info",
            "tooltip-success": props.color == "success",
            "tooltip-warning": props.color == "warning",
            "tooltip-error": props.color == "error",
            "tooltip-top": props.position == "top",
            "tooltip-bottom": props.position == "bottom",
            "tooltip-left": props.position == "left",
            "tooltip-right": props.position == "right"
        }
]);
</script>

<template>
    <div role="tooltip" :data-theme="props.dataTheme" :data-tip="props.message" :class="classes">
        <slot />
    </div>
</template>
