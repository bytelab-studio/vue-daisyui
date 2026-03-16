<script setup lang="ts">
import type {BreadcrumbItem} from "./BreadcrumbItem";

const props = defineProps<BreadcrumbItem.Props>();
</script>

<template>
    <li role="link" :data-theme="props.dataTheme">
        <a v-if="props.href" :href="href">
            <slot />
        </a>
        <slot v-else />
    </li>
</template>