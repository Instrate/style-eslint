import parserTypescriptEslint from "@typescript-eslint/parser";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import eslintPluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginJson from "@eslint/json";
import eslintPluginJsonOther from "eslint-plugin-json";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";

import pluginMarkdown from "@eslint/markdown";

import PrettierConfig from "../../prettier.config.mjs";

const eslintSourcePresetRules = {
    "prettier/prettier": ["error", PrettierConfig.prettierConfigDefault],
    "@stylistic/semi": [
        "error",
        "always",
        {
            omitLastInOneLineClassBody: true
        }
    ],
    "@stylistic/indent": ["off"],
    "@stylistic/indent-binary-ops": ["off"],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/comma-dangle": ["error", "never"],
    "@stylistic/quote-props": ["error", "as-needed"],
    "@stylistic/brace-style": ["off"],
    "@stylistic/no-trailing-spaces": ["off"],
    "@stylistic/member-delimiter-style": [
        "error",
        {
            overrides: {
                interface: {
                    multiline: {
                        delimiter: "semi",
                        requireLast: true
                    }
                }
            }
        }
    ],
    "@stylistic/operator-linebreak": ["off"],
    "@stylistic/linebreak-style": ["error", "unix"],
    "@stylistic/object-curly-newline": [
        "error",
        {
            consistent: true
        }
    ],
    "@stylistic/no-whitespace-before-property": ["error"],
    "@stylistic/function-paren-newline": ["error", "consistent"],
    "@stylistic/no-multiple-empty-lines": [
        "error",
        {
            max: 2,
            maxBOF: 1
        }
    ],
    "@stylistic/arrow-parens": ["error", "always"],
    "@stylistic/max-len": [
        "error",
        {
            code: 100,
            tabWidth: 4,
            ignoreStrings: true,
            ignoreUrls: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
        }
    ],
    "@unused-imports/no-unused-imports": ["error"]
};

export const TsConfig = {
    files: ["**/*.ts"],
    extends: [
        eslintPluginStylistic.configs.recommended,
        eslintPluginPrettierRecommended
    ],
    languageOptions: {
        parser: parserTypescriptEslint,
        ecmaVersion: 2023,
        sourceType: "commonjs"
    },
    plugins: {
        // "@prettier": eslintPluginPrettier,
        "@unused-imports": eslintPluginUnusedImports
    },
    ...eslintConfigPrettier,
    rules: {
        ...eslintSourcePresetRules
    }
};

export const JsConfig = {
    files: ["**/*.{js,mjs}"],
    extends: [
        eslintPluginStylistic.configs.recommended,
        eslintPluginPrettierRecommended
    ],
    languageOptions: {
        ecmaVersion: 2023,
        sourceType: "module"
    },
    plugins: {
        "@unused-imports": eslintPluginUnusedImports
    },
    ...eslintConfigPrettier,
    rules: {
        ...eslintSourcePresetRules
    }
};

export const TsxConfig = {
    files: ["**/*.tsx"],
    extends: [
        eslintPluginStylistic.configs.recommended,
        eslintPluginPrettierRecommended
    ],
    languageOptions: {
        parser: parserTypescriptEslint,
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            }
        }
    },
    plugins: {
        "@unused-imports": eslintPluginUnusedImports,
        react: eslintPluginReact
    },
    ...eslintConfigPrettier,
    rules: {
        ...eslintSourcePresetRules,
        "@stylistic/jsx-indent-props": ["off"]
    }
};

export const JsonConfig = {
    files: ["**/*.json", "**/*.json.default"],
    extends: [],
    plugins: {
        json: eslintPluginJson,
        jsonc: eslintPluginJsonc,
        "@json": eslintPluginJsonOther
    },
    language: "json/jsonc",
    languageOptions: {
        parser: jsoncParser
    },
    rules: {
        "@json/trailing-comma": ["error"],
        "jsonc/no-comments": ["error"],
        "jsonc/indent": ["error", 4, {}],
        "jsonc/key-spacing": [
            "error",
            {
                beforeColon: false,
                afterColon: true,
                mode: "strict"
            }
        ],
        "jsonc/object-property-newline": "error",
        "jsonc/object-curly-spacing": ["error", "never"]
    }
};

export const MarkdownConfig = {
    files: ["**/*.md"],
    plugins: {
        markdown: pluginMarkdown
    },
    processor: "markdown/markdown"
};
