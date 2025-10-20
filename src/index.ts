import type {App} from "vue";
import {PrimitiveSlot} from "@components/PrimitiveSlot.ts";
import Button from "@components/Button.vue";

import Dropdown from "@components/dropdown/Dropdown.vue";
import DropdownTrigger from "@components/dropdown/DropdownTrigger.vue";
import DropdownContent from "@components/dropdown/DropdownContent.vue";

import Modal from "@components/modal/Modal.vue";
import ModalTrigger from "@components/modal/ModalTrigger.vue";
import ModalContent from "@components/modal/ModalContent.vue";
import ModalAction from "@components/modal/ModalAction.vue";

import Accordion from "@components/accordion/Accordion.vue";
import AccordionItem from "@components/accordion/AccordionItem.vue";
import AccordionHeader from "@components/accordion/AccordionHeader.vue";
import AccordionContent from "@components/accordion/AccordionContent.vue";

import Badge from "@components/Badge.vue";
import Checkbox from "@components/Checkbox.vue";
import Select from "@components/Select.vue";

export {
    PrimitiveSlot,
    Button,

    Dropdown,
    DropdownTrigger,
    DropdownContent,

    Modal,
    ModalTrigger,
    ModalContent,
    ModalAction,

    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionContent,

    Badge,
    Checkbox,
    Select
}

export {setClasses, type StyleClasses} from "@logic/classes";
export * from "@logic/consts";
export * from "@logic/controller";

export default {
    install(app: App) {
        app.component("PrimitiveSlot", PrimitiveSlot);
        app.component("Button", Button);

        app.component("Dropdown", Dropdown);
        app.component("DropdownTrigger", DropdownTrigger);
        app.component("DropdownContent", DropdownContent);

        app.component("Modal", Modal);
        app.component("ModalTrigger", ModalTrigger);
        app.component("ModalContent", ModalContent);
        app.component("ModalAction", ModalAction);

        app.component("Accordion", Accordion);
        app.component("AccordionItem", AccordionItem);
        app.component("AccordionHeader", AccordionHeader);
        app.component("AccordionContent", AccordionContent);
    
        app.component("Badge", Badge);
        app.component("Checkbox", Checkbox);
        app.component("Select", Select);
    }
}