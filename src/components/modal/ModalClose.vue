<template>
    <PrimitiveSlot @click="closeModal">
        <slot />
    </PrimitiveSlot>
</template>

<script setup lang="ts">
import {PrimitiveSlot} from "@components/PrimitiveSlot";
import {useModal} from "@logic/hooks/modal";
import {inject} from "vue";

const modal = useModal();

const dialogId = inject<string>(modal.dialog);

if (!dialogId) {
    throw "Could not find modal context";
}

function closeModal() {
    if (!dialogId) {
        throw "Could not find modal context";
    }

    const dialog: HTMLDialogElement | null = document.getElementById(dialogId) as HTMLDialogElement | null;
    if (!dialog) {
        throw "Could not find modal dialog element";
    }

    dialog.close();
}
</script>