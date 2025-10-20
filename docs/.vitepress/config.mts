import {defineConfig} from "vitepress"
import * as path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                "@logic": path.join(__dirname, "..", "..", "src", "logic"),
                "@components": path.join(__dirname, "..", "..", "src", "components")
            }
        }
    },
    title: "Vue daisyUI",
    description: "A daisyUI Vue wrapper",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: "Home", link: "/"},
            {text: "Components", link: "/components/button"}
        ],

        sidebar: [
            {
                text: "Actions",
                items: [
                    {text: "Button", link: "/components/button"},
                    {text: "Dropdown", link: "/components/dropdown"},
                    {text: "Modal", link: "/components/modal"},
                    {text: "Swap", link: "/components/swap"}
                ]
            },
            {
                text: "Data display",
                items: [
                    {text: "Accordion", link: "/components/accordion"},
                    {text: "Badge", link: "/components/badge"},
                ]
            }
        ],

        socialLinks: [
            {icon: "github", link: "https://github.com/bytelab-studio/vue-daisyui"}
        ]
    }
});