<template>
    <div v-if="props.joined" class="join join-vertical bg-base-100">
        <slot />
    </div>
    <slot v-else />
</template>

<script setup lang="ts">
import {getCurrentInstance, provide, withDefaults, defineProps} from "vue";
import {useAccordion} from "@logic/hooks/accordion";

const accordion = useAccordion();
const instance = getCurrentInstance();

const props = withDefaults(defineProps<{
    joined?: boolean;
}>(), {
    joined: false
});

provide(accordion.name, `accordion-${instance!.uid}`);
provide(accordion.joined, props.joined);

</script>
