const { override, addBabelPlugin, addBabelPreset } = require("customize-cra");

module.exports = override(
  addBabelPlugin("@emotion/babel-plugin"),
  addBabelPreset("@emotion/babel-preset-css-prop")
);
