module.exports = {
  "presets": [
    "next/babel",
    "@babel/preset-typescript"
  ],
  "plugins": [
    ["inline-react-svg"],
    ["macros"],
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
        }
      }
    ]
  ]
}