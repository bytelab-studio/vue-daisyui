<script setup lang="ts">
import type {CardBody} from "./CardBody";

const props = defineProps<CardBody.Props>();
</script>

<template>
    <figure :data-theme="props.dataTheme">
        <img :src="props.src" :alt="props.alt" />
    </figure>
</template>