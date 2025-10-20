<template>
    <DemoContainer>
        <DemoPreview>
            <Accordion :joined="joined">
                <AccordionItem>
                    <AccordionHeader>How do I create an account?</AccordionHeader>
                    <AccordionContent>
                        Click the "Sign Up" button in the top right corner and follow the registration process.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader>I forgot my password. What should I do?</AccordionHeader>
                    <AccordionContent>
                        Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </DemoPreview>
        <DemoSettings>
            <Checkbox color="primary" size="sm" v-model="joined">
                <span class="text-sm">Joined</span>
            </Checkbox>
        </DemoSettings>
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import DemoPreview from "./DemoPreview.vue";
import DemoSettings from "./DemoSettings.vue";
import Accordion from "@components/accordion/Accordion.vue";
import AccordionItem from "@components/accordion/AccordionItem.vue";
import AccordionHeader from "@components/accordion/AccordionHeader.vue";
import AccordionContent from "@components/accordion/AccordionContent.vue";
import { ref, Ref } from "vue";

const joined: Ref<boolean> = ref(false);
</script>