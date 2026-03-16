<script setup lang="ts">
import type { Breadcrumbs } from "./Breadcrumbs";


const props = defineProps<Breadcrumbs.Props>();
</script>

<template>
    <div role="navigation" aria-label="Breadcrumbs" :data-theme="props.dataTheme">
        <ul>
            <slot />
        </ul>
    </div>
</template>