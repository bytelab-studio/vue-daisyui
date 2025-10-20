<template>
    <DemoContainer>
        <DemoPreview>
            <Button color="primary" @click="modalController.open()">
                Open Modal
            </Button>
            <Modal>
                <ModalContent ref="modal" :dismissable="dismissable">
                    <h3 class="text-lg font-bold">Hello!</h3>
                    <p>Click outside to close</p>
                    <ModalAction>
                        <Button color="primary" variant="soft" class="mt-3" @click="modalController.close()">Close</Button>
                    </ModalAction>
                </ModalContent>
            </Modal>
        </DemoPreview>
        <DemoSettings>
            <Checkbox size="sm" color="primary" v-model="dismissable">
                <span class="text-sm">Close on outside click?</span>
            </Checkbox>
        </DemoSettings>
    </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from "./DemoContainer.vue";
import DemoPreview from "./DemoPreview.vue";
import DemoSettings from "./DemoSettings.vue";
import Modal from "@components/modal/Modal.vue";
import ModalContent from "@components/modal/ModalContent.vue";
import ModalAction from "@components/modal/ModalAction.vue";
import Button from "@components/Button.vue";
import {ref, Ref, useTemplateRef} from "vue";
import {ModalController, useModal} from "@logic/controller";

const dismissable: Ref<boolean> = ref(true);
const modalTemplate = useTemplateRef("modal");
const modalController: ModalController = useModal(modalTemplate);
</script>
