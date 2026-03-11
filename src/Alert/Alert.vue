<script setup lang="ts">
import {computed} from "vue";
import type {Alert} from "./Alert";

const props = defineProps<Alert.Prop>();
const classes = computed(() => [
    "alert",
    {
        "alert-vertical": props.layout == "vertical",
        "alert-horizontal": props.layout == "horizontal",
        "alert-info": props.status == "info",
        "alert-success": props.status == "success",
        "alert-warning": props.status == "warning",
        "alert-error": props.status == "error",
        "alert-soft": props.variant == "soft",
        "alert-dash": props.variant == "dash",
        "alert-outline": props.variant == "outline",
    }
]);
</script>

<template>
    <div role="alert" :data-theme="props.dataTheme" :class="classes">
        <slot />
    </div>
</template>