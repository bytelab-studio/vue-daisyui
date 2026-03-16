<script setup lang="ts">
import type {CardBody} from "./CardBody";

const props = defineProps<CardBody.Props>();
</script>

<template>
    <div class="card-body" :data-theme="props.dataTheme">
        <slot />
    </div>
</template>