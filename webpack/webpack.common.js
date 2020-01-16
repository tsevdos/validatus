const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: [/\.js?$/],
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"],
    extensions: [".js", ".json"],
  },
};
