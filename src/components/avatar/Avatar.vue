<template>
    <div :class="appliedClasses">    
        <slot />
    </div>
</template>

<script setup lang="ts">
import {type ComputedRef, computed} from "vue";
import classes from "@logic/classes";

const props = defineProps<{
    modifier?: "placeholder" | "online" | "offline";
}>();

const appliedClasses: ComputedRef<string[]> = computed(() => {
    const appliedClasses: string[] = [classes.value.avatar.component];

    if (props.modifier) {
        appliedClasses.push(classes.value.avatar.modifier[props.modifier]);
    }

    return appliedClasses;
});

</script>