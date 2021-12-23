module.exports = function (api) {
  api.cache(true)

  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: ["macros", "react-native-reanimated/plugin"],
  }
}
