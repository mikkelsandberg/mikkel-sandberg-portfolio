import stylisticPlugin from "@stylistic/eslint-plugin";
import noRelativeImportPathsPlugin from "eslint-plugin-no-relative-import-paths";
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "**/out/**",
      "**/build/**",
      "**/dist/**",
      "**/next-env.d.ts",
    ],
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "no-relative-import-paths": noRelativeImportPathsPlugin,
      "@stylistic": stylisticPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        {
          allowSameFolder: false,
          prefix: "@",
        },
      ],
      "@stylistic/indent": ["error", 2],
    },
  },
];
