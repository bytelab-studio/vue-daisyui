<template>
    <DemoContainer>
        <Swap>
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
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import Swap from "@components/Swap/Swap.vue";
import SwapState from "@components/Swap/SwapState.vue";
</script>