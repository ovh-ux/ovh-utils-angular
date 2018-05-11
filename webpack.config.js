const webpack = require("webpack");
const path = require("path");

let config = {
    mode: "production",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./bin"),
      filename: "./ovh-utils-angular.js"
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    }
  }

  module.exports = config;
