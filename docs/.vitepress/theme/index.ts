import DefaultTheme from "vitepress/theme";
import type {Theme} from "vitepress";
import shadow from "vue-shadow-dom";

import daisyui from "../../../src/index";
import DemoButton from "./components/DemoButton.vue";
import DemoDropdown from "./components/DemoDropdown.vue";
import DemoModal from "./components/DemoModal.vue";
import DemoSwap from "./components/DemoSwap.vue";
import DemoAccordion from "./components/DemoAccordion.vue";
import DemoBadge from "./components/DemoBadge.vue";
import DemoSelect from "./components/DemoSelect.vue";

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.component("DemoButton", DemoButton);
        app.component("DemoDropdown", DemoDropdown);
        app.component("DemoModal", DemoModal);
        app.component("DemoSwap", DemoSwap);
        app.component("DemoAccordion", DemoAccordion);
        app.component("DemoBadge", DemoBadge);
        app.component("DemoSelect", DemoSelect);
        app.use(daisyui);
        app.use(shadow)
    }
} satisfies Theme