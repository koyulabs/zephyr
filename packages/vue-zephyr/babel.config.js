module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    "@babel/preset-typescript",
    "@babel/preset-env"
  ],
  plugins: [
    ["@vue/babel-plugin-jsx"],
    [
      "module-resolver",
      {
        "root": [
          "./"
        ],
        "alias": {
          "@": "./src",
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@components-local": "./src/components-local",
          "@layouts": "./src/layouts",
          "@locales": "./src/locales",
          "@pages": "./src/pages",
          "@public": "./public",
          "@utils": "./src/utils",
          "@typeDefs": "./src/types",
        }
      }
    ]
  ]
};
