import {computed, type ComputedRef, type ShallowRef} from "vue";
import Accordion from "@components/accordion/Accordion.vue";

export interface AccordionController {
    openItem(index: number): void;

    opened: ComputedRef<number | null>;
}

export function useAccordion(accordion: ShallowRef<typeof Accordion>): AccordionController {
    const opened: ComputedRef<number | null> = computed(() => accordion.value ? accordion.value.opened : null);

    function openItem(index: number): void {
        if (!accordion.value) {
            throw "Accordion component not found";
        }

        accordion.value.setItem(index);
    }

    return {
        opened,
        openItem
    }
}