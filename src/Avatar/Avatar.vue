<script setup lang="ts">
import { computed } from "vue";
import type { Avatar } from "./Avatar";

const props = withDefaults(defineProps<Avatar.Props>(), {
    size: "md"
});
const containerClasses = computed(() => [
    "avatar",
    {
        "avatar-outline": props.online,
        "avatar-offline": props.offline,
        "avatar-placeholder": !props.src
    }
]);
const imgClasses = computed(() => ({
    "ring ring-offset-base-100 ring-offset-2": props.border,
    "ring-accent": props.borderColor == "accent",
    "ring-error": props.borderColor == "error",
    "ring-info": props.borderColor == "info",
    "ring-neutral": props.borderColor == "neutral",
    "ring-primary": props.borderColor == "primary",
    "ring-secondary": props.borderColor == "secondary",
    "ring-success": props.borderColor == "success",
    "ring-warning": props.borderColor == "warning",
    "rounded-btn": props.shape == "square",
    "rounded-full": props.shape == "circle",
    "w-32 h-32": props.size == "lg",
    "w-24 h-24": props.size == "md",
    "w-14 h-14": props.size == "sm",
    "w-10 h-10": props.size == "xs",
}));
const placeholderClasses = computed(() => ({
    "bg-neutral-focus": !props.color,
    "text-neutral-content": !props.color || props.color == "neutral",
    "bg-accent": props.color == "accent",
    "bg-error": props.color == "error",
    "bg-info": props.color == "info",
    "bg-neutral": props.color == "neutral",
    "bg-primary": props.color == "primary",
    "bg-secondary": props.color == "secondary",
    "bg-success": props.color == "success",
    "bg-warning": props.color == "warning",
    "text-access-content": props.color == "accent",
    "text-error-content": props.color == "error",
    "text-info-content": props.color == "info",
    "text-primary-content": props.color == "primary",
    "text-secondary-content": props.color == "secondary",
    "text-success-content": props.color == "success",
    "text-warning-content": props.color == "warning",
    "ring ring-offset-base-100 ring-offset-2": props.border,
    "ring-accent": props.borderColor == "accent",
    "ring-error": props.borderColor == "error",
    "ring-info": props.borderColor == "info",
    "ring-neutral": props.borderColor == "neutral",
    "ring-primary": props.borderColor == "primary",
    "ring-secondary": props.borderColor == "secondary",
    "ring-success": props.borderColor == "success",
    "ring-warning": props.borderColor == "warning",
    "rounded-btn": props.shape == "square",
    "rounded-full": props.shape == "circle",
    "w-32 h-32": props.size == "lg",
    "w-24 h-24": props.size == "md",
    "w-14 h-14": props.size == "sm",
    "w-10 h-10": props.size == "xs",
}));
const customImgDimension = computed(() => typeof props.size == "number" ? `width:${props.size}px;height:${props.size}px` : "");
</script>

<template>
    <div aria-label="Avatar photo" :data-theme="props.dataTheme" :class="containerClasses">
        <div v-if="props.src" :class="imgClasses" :style="customImgDimension">
            <img :src="props.src" />
        </div>
        <div v-else-if="props.letters" :class="placeholderClasses" :style="customImgDimension">
            <span>{{ letters }}</span>
        </div>
        <div v-else :class="imgClasses" :style="customImgDimension">
            <slot />
        </div>
    </div>
</template>