<template>
    <div :class="classes.avatar.part.group">
        <slot />
    </div>
</template>

<script setup lang="ts">
import classes from '@logic/classes';
</script>