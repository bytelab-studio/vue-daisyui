<script setup lang="ts">
import {computed} from "vue";
import type {AvatarGroup} from "./AvatarGroup";


const props = defineProps<AvatarGroup.Props>();
const classes = computed(() => [
    "avatar-group",
    "-space-x-6"
]);
</script>

<template>
    <div aria-label="Group of Avatars" :data-theme="props.dataTheme" :class="classes">
        <slot />
    </div>
</template>