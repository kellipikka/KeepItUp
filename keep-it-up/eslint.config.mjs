import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import parser from "@typescript-eslint/parser";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  eslintPluginPrettier,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    environment: {
      es2021: true,
      browser: true,
      node: true,
    },
    globals: globals.browser,
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact,
      prettier: "eslint-plugin-prettier",
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      semi: "error",
      "prefer-const": "error",
    },
  },
];
