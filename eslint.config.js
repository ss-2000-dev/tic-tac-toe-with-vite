import eslint from "eslint";
import js from "@eslint/js";
import react from "eslint-plugin-react";
// import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // eslint.configs.recommended,
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    settings: {
      react: {
        version: "detect", // 使用しているReactのバージョンを自動検出
      },
    },
    languageOptions: {
      ecmaVersion: 2022,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true, // JSX構文を有効にする
        },
        sourceType: "module",
      },
    },
    plugins: {
      react: react,
      // "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 17以降、JSX に React を明示的にインポートする必要がない
      "react/jsx-uses-react": "error", // React が JSX で使用されていること
      "react/jsx-uses-vars": "error", // JSX 内で使用される変数を未使用とみなさない
    },
  },
];
