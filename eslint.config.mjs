import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ),
  {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    env: {
      es6: true,
      node: true,
    },
    plugins: ["import"],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
];