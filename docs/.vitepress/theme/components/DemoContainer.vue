<script setup lang="ts">
import {ShadowRoot} from "vue-shadow-dom";
</script>

<template>
    <ShadowRoot>
        <div data-theme="light" class="p-4 rounded-md flex flex-col items-center justify-center">
            <link rel="stylesheet" href="/tailwindcss.bundle.css"/>
            <slot/>
        </div>
    </ShadowRoot>
</template>