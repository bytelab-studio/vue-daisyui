<template>
    <slot />
</template>

<script setup lang="ts">

import {getCurrentInstance, provide} from "vue";
import {useModal} from "@logic/hooks/modal.ts";

const instance = getCurrentInstance();
const modal = useModal();

provide(modal.dialog, `modal-${instance!.uid}`);
</script>
