<template>
    <DemoContainer>
        <Select color="primary">
            <option disabled selected>Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
        </Select>
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import Select from "@components/Select.vue";
</script>