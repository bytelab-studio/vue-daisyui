<template>
    <DemoContainer>
        <DemoPreview>
            <Button 
                :color="color"
                :size="size"
                :variant="variant ? variant : undefined"
                :modifier="modifier ? modifier : undefined"
                @click="counter++">
                Clicked {{ counter }}
            </Button>
        </DemoPreview>
        <DemoSettings>
            <ColorSelect v-model="color" />
            <SizeSelect v-model="size" />
            <Select color="neutral" size="sm" v-model="variant">
                <option value="">Solid</option>
                <option value="outline">Outline</option>
                <option value="dash">Dash</option>
                <option value="soft">Soft</option>
                <option value="ghost">Ghost</option>
                <option value="link">Link</option>
            </Select>
            <Select color="neutral" size="sm" v-model="modifier">
                <option value="">None</option>
                <option value="wide">Wide</option>
                <option value="square">Square</option>
                <option value="circle">Circle</option>
            </Select>
        </DemoSettings>
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import DemoPreview from "./DemoPreview.vue";
import DemoSettings from "./DemoSettings.vue";
import ColorSelect from "./utils/ColorSelect.vue";
import SizeSelect from "./utils/SizeSelect.vue";
import Button from "@components/Button.vue";
import Select from "@components/Select.vue";
import {Colors, Sizes} from "@logic/consts";
import {ref, Ref} from "vue";

const variant: Ref<string> = ref("");
const color: Ref<Colors> = ref("primary");
const size: Ref<Sizes | undefined> = ref("md");
const modifier: Ref<string> = ref("");
const counter: Ref<number> = ref(0);
</script>