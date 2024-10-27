import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "block-spacing": ["error", "always"],
      "space-before-function-paren": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "no-console": ["warn"],
      curly: ["error", "all"],
      "consistent-return": "error",
      "no-alert": "error",
      eqeqeq: ["error", "always"],
      "react/prop-types": "off",
      "react/jsx-boolean-value": ["error", "always"],
      "react/jsx-sort-props": "warn",
      "react/jsx-no-duplicate-props": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/type-annotation-spacing": "error",
      "prefer-const": "error",
      "no-use-before-define": "error",
      "no-extra-parens": ["error", "all"],
    },
  }
);
