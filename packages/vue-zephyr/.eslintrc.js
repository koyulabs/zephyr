module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/require-component-is": "off",
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "vue/no-unused-components": "warn",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
  ignorePatterns: [
    "build/",
    "node_modules/",
    "src/shims-tsx.d.ts",
    "src/shims-vue.d.ts",
    "*.config.js",
    "src/main.ts",
    "test/",
    "dist/*.hot-update.json",
    "dist/index.html",
    "dist/webpack-stats.json",
    "*.d.ts",
    "testumdbuild",
  ],
};
