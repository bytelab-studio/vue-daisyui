import ModalContent from "@components/modal/ModalContent.vue";
import {computed, type ComputedRef, type Ref, type ShallowRef} from "vue";

export interface ModalController {
    state: Ref<"open" | "closed">;

    open(): void;

    close(): void;

    toggle(): void;
}

export function useModal(modal: ShallowRef<typeof ModalContent>): ModalController {
    const state: ComputedRef<"open" | "closed"> = computed(() => modal.value ? modal.value.state : "closed");

    function open(): void {
        if (!modal.value) {
            throw "Modal component not found";
        }

        modal.value.open();
    }

    function close(): void {
        if (!modal.value) {
            throw "Modal component not found";
        }

        modal.value.close();
    }

    function toggle(): void {
        if (!modal.value) {
            throw "Modal component not found";
        }

        if (state.value == "open") {
            modal.value.close();
            return;
        }

        modal.value.open();
    }

    return {
        state,
        open,
        close,
        toggle
    }
}