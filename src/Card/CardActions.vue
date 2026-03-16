<script setup lang="ts">
import type {CardActions} from "./CardActions";

const props = defineProps<CardActions.Props>();
</script>

<template>
    <div :data-theme="props.dataTheme" class="card-actions">
        <slot />
    </div>
</template>