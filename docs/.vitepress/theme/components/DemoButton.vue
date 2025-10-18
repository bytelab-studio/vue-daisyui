<template>
    <DemoContainer>
        <Button color="primary" @click="counter++">
            Clicked {{ counter }}
        </Button>
    </DemoContainer>
</template>

<script setup lang="ts">
import Button from "@components/Button.vue";
import DemoContainer from "./DemoContainer.vue";
import {ref, Ref} from "vue";

const counter: Ref<number> = ref(0);
</script>