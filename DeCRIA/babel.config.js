// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // ... outros plugins, se houver
      'react-native-reanimated/plugin', // Deve ser o último plugin
    ],
  };
};