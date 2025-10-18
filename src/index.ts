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

export {
    PrimitiveSlot,
    Button,

    Dropdown,
    DropdownTrigger,
    DropdownContent,

    Modal,
    ModalTrigger,
    ModalContent,
    ModalAction
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
    }
}