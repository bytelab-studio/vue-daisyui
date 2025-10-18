<template>
    <DemoContainer>
        <Dropdown>
            <DropdownTrigger>
                <Button color="primary">
                    Open Dropdown
                </Button>
            </DropdownTrigger>
            <DropdownContent close-on-select>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
            </DropdownContent>
        </Dropdown>
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import Dropdown from "@components/dropdown/Dropdown.vue";
import DropdownTrigger from "@components/dropdown/DropdownTrigger.vue";
import Button from "@components/Button.vue";
import DropdownContent from "@components/dropdown/DropdownContent.vue";
import DropdownItem from "@components/dropdown/DropdownItem.vue";
</script>