const webpack = require("webpack");
const path = require("path");
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

let config = {
    mode: "production",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./bin"),
      filename: "./ovh-utils-angular.min.js"
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery'
        }),
        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        })
    ]
  }

module.exports = config;
