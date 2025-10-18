<template>
    <PrimitiveSlot :popovertarget="popoverId" :style="`anchor-name:${anchorId}`">
        <slot />
    </PrimitiveSlot>
</template>

<script setup lang="ts">
import {PrimitiveSlot} from "@components/PrimitiveSlot.ts";
import {inject} from "vue";
import {useDropdown} from "@logic/hooks/dropdown.ts";

const dropdown = useDropdown();

const popoverId = inject<string>(dropdown.popover);
const anchorId = inject<string>(dropdown.anchor);

if (!popoverId || !anchorId) {
    throw "Could not find dropdown context";
}
</script>
