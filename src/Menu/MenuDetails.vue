<script setup lang="ts">
import type {MenuDetails} from "./MenuDetails";

const props = defineProps<MenuDetails.Props>();
</script>

<template>
    <details :open="props.open">
        <summary>
            <slot name="label" />
        </summary>
        <ul>
            <slot name="items" />
        </ul>
    </details>
</template>