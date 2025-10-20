<template>
    <div v-if="props.joined" class="join join-vertical bg-base-100">
        <slot/>
    </div>
    <slot v-else />
</template>

<script setup lang="ts">
import {computed, type ComputedRef, defineProps, getCurrentInstance, provide, withDefaults} from "vue";
import {useAccordion} from "@logic/hooks/accordion";

const accordion = useAccordion();
const instance = getCurrentInstance();

const props = withDefaults(defineProps<{
    joined?: boolean;
}>(), {
    joined: false
});

const name = `accordion-${instance!.uid}`;

provide(accordion.name, name);
provide(accordion.joined, computed<boolean>(() => props.joined));

const opened: ComputedRef<number | null> = computed(() => {
    const accords: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[type=checkbox][name='${name}']`);
    for (let i = 0; i < accords.length; i++) {
        if (accords.item(i).checked) {
            return i;
        }
    }

    return null;
});

function openItem(index: number): void {
    if (!Number.isInteger(index) || index < 0) {
        throw "'index' must be a positive integer";
    }

    const accords: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[type=checkbox][name='${name}']`);
    if (accords.length >= index) {
        throw "'index' is out of bounds";
    }

    for (let i = 0; i < accords.length; i++) {
        accords.item(i).checked = i == index;
    }
}

defineExpose({
    openItem,
    opened
});

</script>
