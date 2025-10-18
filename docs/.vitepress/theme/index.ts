import DefaultTheme from "vitepress/theme";
import type {Theme} from "vitepress";
import shadow from "vue-shadow-dom";

import daisyui from "../../../src/index";
import DemoButton from "./components/DemoButton.vue";
import DemoDropdown from "./components/DemoDropdown.vue";
import DemoModal from "./components/DemoModal.vue";

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.component("DemoButton", DemoButton);
        app.component("DemoDropdown", DemoDropdown);
        app.component("DemoModal", DemoModal);
        app.use(daisyui);
        app.use(shadow)
    }
} satisfies Theme