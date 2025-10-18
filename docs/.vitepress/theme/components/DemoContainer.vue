<script setup lang="ts">
import {ShadowRoot} from "vue-shadow-dom";
</script>

<template>
    <ShadowRoot>
        <div data-theme="dark" class="p-4 rounded-md flex justify-center">
            <link rel="stylesheet" href="/tailwindcss.bundle.css"/>
            <slot/>
        </div>
    </ShadowRoot>
</template>