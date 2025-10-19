<template>
    <div :class="[classes.collapse.part.content, 'text-sm']">
        <slot />
    </div>
</template>

<script setup lang="ts">
import classes from "@logic/classes";
</script>