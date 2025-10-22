<template>
    <DemoContainer>
        <DemoPreview>
            <Mask :type="type" :modifier="modifier ? modifier : undefined">
                <img src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
            </Mask>
        </DemoPreview>
        <DemoSettings>
            <Select color="neutral" size="sm" v-model="type">
                <option value="squircle">Squircle</option>
                <option value="heart">Heart</option>
                <option value="hexagon">Hexagon</option>
                <option value="hexagon2">Hexagon 2</option>
                <option value="decagon">Decagon</option>
                <option value="pentagon">Pentagon</option>
                <option value="diamond">Diamond</option>
                <option value="square">Square</option>
                <option value="circle">Circle</option>
                <option value="star">Star</option>
                <option value="star2">Star 2</option>
                <option value="triangle">Triangle</option>
                <option value="triangle2">Triangle 2</option>
                <option value="triangle3">Triangle 3</option>
                <option value="triangle4">Triangle 4</option>
            </Select>
            <Select color="neutral" size="sm" v-model="modifier">
                <option value="">None</option>
                <option value="half1">Half 1</option>
                <option value="half2">Half 2</option>
            </Select>
        </DemoSettings>
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import DemoPreview from "./DemoPreview.vue";
import DemoSettings from "./DemoSettings.vue";
import Select from "@components/Select.vue";
import Mask from "@components/Mask.vue";
import {type Ref, ref} from "vue";

const type: Ref<string> = ref("squircle");
const modifier: Ref<string> = ref("");
</script>