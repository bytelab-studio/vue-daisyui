<template>
    <DemoContainer>
        <DemoPreview>
            <Checkbox :color="color" :size="size">
                Remember me?
            </Checkbox>
        </DemoPreview>
        <DemoSettings>
            <ColorSelect v-model="color" />
            <SizeSelect v-model="size" />
        </DemoSettings>
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import DemoPreview from "./DemoPreview.vue";
import DemoSettings from "./DemoSettings.vue";
import ColorSelect from "./utils/ColorSelect.vue";
import SizeSelect from "./utils/SizeSelect.vue";
import Checkbox from "@components/Checkbox.vue";
import {Colors, Sizes} from "@logic/consts";
import {type Ref, ref} from "vue";

const color: Ref<Colors> = ref("primary");
const size: Ref<Sizes> = ref("md");
</script>