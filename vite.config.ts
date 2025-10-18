import * as path from "path";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), dts({ tsconfigPath: './tsconfig.app.json' })],
    resolve: {
        alias: {
            "@logic": path.join(__dirname, "src", "logic"),
            "@components": path.join(__dirname, "src", "components")
        }
    },
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "vue-daisyui",
            fileName: (format) => `vue-daisyui.${format}.js`
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                }
            }
        }
    }
});