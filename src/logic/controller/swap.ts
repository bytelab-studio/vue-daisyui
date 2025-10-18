import {computed, type ComputedRef, type ShallowRef} from "vue";
import type Swap from "@components/Swap/Swap.vue";

interface SwapController {
    setState(state: "on" | "off"): void;

    toggle(): void;

    state: ComputedRef<"on" | "off">;
}

export function useSwap(swap: ShallowRef<typeof Swap>): SwapController {
    const state: ComputedRef<"on" | "off"> = computed(() => swap.value ? swap.value.state : "off");

    function setState(state: "on" | "off"): void {
        if (!swap.value) {
            throw "Swap component not found";
        }

        swap.value.setState(state);
    }

    function toggle(): void {
        if (!swap.value) {
            throw "Swap component not found";
        }

        setState(state.value == "on" ? "off" : "on");
    }

    return {
        state,
        toggle,
        setState
    }
}