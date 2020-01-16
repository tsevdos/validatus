const baseConfig = require("./webpack.common.js");
const merge = require("webpack-merge");
const path = require("path");

module.exports = merge(baseConfig, {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
    filename: "validatus.js",
    library: "validatus",
    libraryTarget: "umd",
  },
});
