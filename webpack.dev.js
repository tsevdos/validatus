const baseConfig = require("./webpack.common.js");
const merge = require("webpack-merge");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./examples/index.html",
  filename: "./index.html",
});

module.exports = merge(baseConfig, {
  entry: path.resolve("./examples/examples.js"),
  output: {
    path: path.resolve("./examples"),
    filename: "examples-bundle.js",
  },
  devServer: {
    overlay: true,
    historyApiFallback: true,
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [htmlPlugin],
});
