const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/, // regular expression
        include: [path.resolve(__dirname, "src")],
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // for the imports
  },
  output: {
    publicPath: "auto",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
