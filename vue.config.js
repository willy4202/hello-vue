const { defineConfig } = require("@vue/cli-service");
const WebpackRtlPlugin = require("webpack-rtl-plugin");
const webpack = require("webpack");

module.exports = defineConfig({
  css: {
    extract: {
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
    },
  },
  configureWebpack: {
    plugins: [
      new WebpackRtlPlugin({
        autoRename: true,
        stringMap: [
          {
            name: "ltr-rtl",
            search: "ltr",
            replace: "rtl",
            options: {
              scope: "*",
              ignoreCase: false,
            },
          },
        ],
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
});
