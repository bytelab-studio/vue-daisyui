<template>
    <ShadowRoot>
        <div data-theme="light" class="rounded-md flex w-full">
            <link rel="stylesheet" href="/tailwindcss.bundle.css"/>    
            <slot/>
        </div>
    </ShadowRoot>
</template>

<script setup lang="ts">
import {ShadowRoot} from "vue-shadow-dom";
</script>
