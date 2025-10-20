<template>
    <Select size="sm" color="neutral" :value="props.modelValue" @change="v => emit('update:model-value', v.target.value)">
        <option v-for="[value, key] in Object.entries(options)" :key="value" :value="value">{{ key }}</option>
    </Select>
</template>

<script setup lang="ts">
import Select from "@components/Select.vue";
import {Colors} from "@logic/consts";
import {Ref} from "vue";

const props = defineProps<{
    modelValue: Colors;
}>();

const emit = defineEmits<{
    'update:model-value': [Colors]
}>();

const options: Record<Colors, string> = {
    neutral: "Neutral",
    primary: "Primary",
    secondary: "Secondary",
    accent: "Accent",
    info: "Info",
    success: "Success",
    warning: "Warning",
    error: "Error"
}

</script>