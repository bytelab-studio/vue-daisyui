<template>
    <div :class="[classes.collapse.part.title, 'font-semibold']">
        <slot />
    </div>
</template>

<script setup lang="ts">
import classes from "@logic/classes";
</script>