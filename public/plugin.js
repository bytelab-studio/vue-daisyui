const path = require("path");
const plugin = require("tailwindcss/plugin");

console.log(path.join(__dirname, "..", "**", "*.{js,cjs,mjs,html,vue}"));

export default plugin.withOptions(
    (options) => {
        return ({ addBase, addComponents, addUtilities, addVariant }) => {
        }
    },
    () => ({
        content: [path.join(__dirname, "..", "**", "*.{js,cjs,mjs,html,vue}")]
    })
)