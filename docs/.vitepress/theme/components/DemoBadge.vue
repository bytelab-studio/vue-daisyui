<template>
    <DemoContainer>
        <DemoPreview>
            <Badge :color="color" :size="size" :variant="variant">
                Badge
            </Badge>
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
import Badge from "@components/Badge.vue";
import {Colors, Sizes} from "@logic/consts";
import {Ref, ref} from "vue";

const variant: Ref<string> = ref("");
const color: Ref<Colors> = ref("primary");
const size: Ref<Sizes | undefined> = ref("md");
</script>