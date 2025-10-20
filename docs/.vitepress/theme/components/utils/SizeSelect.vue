<template>
    <Select size="sm" color="neutral" :value="props.modelValue" @change="v => emit('update:model-value', v.target.value)">
        <option v-for="[value, key] in Object.entries(options)" :key="value" :value="value">{{ key }}</option>
    </Select>
</template>

<script setup lang="ts">
import Select from "@components/Select.vue";
import {Sizes} from "@logic/consts";
import {Ref} from "vue";

const props = defineProps<{
    modelValue: Sizes;
}>();

const emit = defineEmits<{
    'update:model-value': [Sizes]
}>();

const options: Record<Sizes, string> = {
    xs: "XS",
    sm: "SM",
    md: "MD",
    lg: "LG",
    xl: "XL"
}
</script>