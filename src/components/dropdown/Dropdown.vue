<template>
    <slot />
</template>

<script setup lang="ts">
import {getCurrentInstance, provide} from "vue";
import {useDropdown} from "@logic/hooks/dropdown.ts";

const dropdown = useDropdown();

const instance = getCurrentInstance();

provide(dropdown.popover, `popover-${instance!.uid}`);
provide(dropdown.anchor, `--anchor-${instance!.uid}`);
</script>