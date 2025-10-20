<template>
    <DemoContainer>
        <DemoPreview>
            <Dropdown>
                <DropdownTrigger>
                    <Button color="primary">
                        Open Dropdown
                    </Button>
                </DropdownTrigger>
                <DropdownContent :orientation="orientation" :align="align" :hover="hover">
                    <DropdownItem>Item 1</DropdownItem>
                    <DropdownItem>Item 2</DropdownItem>
                    <DropdownItem>Item 3</DropdownItem>
                </DropdownContent>
            </Dropdown>
        </DemoPreview>
        <DemoSettings>
            <Select color="neutral" size="sm" v-model="orientation">
                <option value="top">Top</option>
                <option value="right">Right</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
            </Select>
            <Select color="neutral" size="sm" v-model="align">
                <option value="start">Start</option>
                <option value="center">Center</option>
                <option value="end">End</option>
            </Select>
        </DemoSettings>
    </DemoContainer>
</template>

<script setup lang="ts">
import {type Ref, ref} from "vue";
import DemoContainer from "./DemoContainer.vue";
import DemoPreview from "./DemoPreview.vue";
import DemoSettings from "./DemoSettings.vue";
import Button from "@components/Button.vue";
import Select from "@components/Select.vue";
import Checkbox from "@components/Checkbox.vue";
import Dropdown from "@components/dropdown/Dropdown.vue";
import DropdownTrigger from "@components/dropdown/DropdownTrigger.vue";
import DropdownContent from "@components/dropdown/DropdownContent.vue";
import DropdownItem from "@components/dropdown/DropdownItem.vue";

const orientation: Ref<string> = ref("bottom");
const align: Ref<string> = ref("start");
</script>