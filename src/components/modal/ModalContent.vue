<template>
    <dialog :id="dialogId" ref="dialog" :class="classes.modal.component">
        <div :class="classes.modal.part.box">
            <slot/>
        </div>
        <form v-if="props.dismissable" method="dialog" :class="classes.modal.part.backdrop">
            <button>Close</button>
        </form>
    </dialog>
</template>

<script setup lang="ts">

import {useModal} from "@logic/hooks/modal";
import {computed, type ComputedRef, inject, useTemplateRef} from "vue";
import classes from "@logic/classes";

const props = withDefaults(defineProps<{
    dismissable?: boolean
}>(), {
    dismissable: true
});

const modal = useModal();

const dialog = useTemplateRef("dialog");
const state: ComputedRef<"open" | "closed"> = computed(() => dialog.value && dialog.value.open ? "open" : "closed");

const dialogId = inject<string>(modal.dialog);

if (!dialogId) {
    throw "Could not find modal context";
}

function open() {
    if (!dialog.value) {
        throw "Could not find modal dialog element";
    }

    dialog.value.show();
}

function close() {
    if (!dialog.value) {
        throw "Could not find modal dialog element";
    }

    dialog.value.close();
}

defineExpose({
    open,
    close,
    state
});

</script>