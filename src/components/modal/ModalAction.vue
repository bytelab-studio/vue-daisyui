<template>
    <div :class="classes.modal.part.action">
        <slot />
    </div>
</template>

<script setup lang="ts">
import classes from "@logic/classes";
</script>
