<template>
    <DemoContainer>
        <DemoPreview>    
            <Swap :effect="effect ? effect : undefined">
                <SwapState state="on">
                    <div class="bg-base-200 w-5 h-5 flex justify-center items-center">
                        ON
                    </div>
                </SwapState>
                <SwapState state="off">
                    <div class="bg-base-200 w-5 h-5 flex justify-center items-center">
                        OFF
                    </div>
                </SwapState>
            </Swap>
        </DemoPreview>
        <DemoSettings>
            <Select color="neutral" size="sm" v-model="effect">
                <option value="">None</option>
                <option value="flip">Flip</option>
                <option value="rotate">Rotate</option>
            </Select>
        </DemoSettings>
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import DemoPreview from "./DemoPreview.vue";
import DemoSettings from "./DemoSettings.vue";
import Swap from "@components/Swap/Swap.vue";
import SwapState from "@components/Swap/SwapState.vue";
import { ref, Ref } from "vue";

const effect: Ref<string> = ref("");
</script>