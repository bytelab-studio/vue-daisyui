<template>
    <DemoContainer>
        <DemoPreview>
            <Select :color="color" :size="size" :variant="ghost ? 'ghost' : undefined">
                <option disabled selected>Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </Select>
        </DemoPreview>
        <DemoSettings>
            <ColorSelect v-model="color" />
            <SizeSelect v-model="size" />
            <Checkbox size="sm" v-model="ghost">
                <span class="text-sm">Ghost</span>
            </Checkbox>
        </DemoSettings>
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import DemoPreview from "./DemoPreview.vue";
import DemoSettings from "./DemoSettings.vue";
import ColorSelect from "./utils/ColorSelect.vue";
import SizeSelect from "./utils/SizeSelect.vue";
import Select from "@components/Select.vue";
import Checkbox from "@components/Checkbox.vue";
import {Colors, Sizes} from "@logic/consts";
import {type Ref, ref} from "vue";

const ghost: Ref<boolean> = ref(false);
const color: Ref<Colors> = ref("primary");
const size: Ref<Sizes> = ref("md");
</script>