<template>
    <DemoContainer>
        <Accordion>
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
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import Accordion from "@components/accordion/Accordion.vue";
import AccordionItem from "@components/accordion/AccordionItem.vue";
import AccordionHeader from "@components/accordion/AccordionHeader.vue";
import AccordionContent from "@components/accordion/AccordionContent.vue";
</script>