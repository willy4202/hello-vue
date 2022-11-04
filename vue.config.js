const { defineConfig } = require("@vue/cli-service");
const WebpackRtlPlugin = require("webpack-rtl-plugin");

module.exports = defineConfig({
  devServer: {
    proxy: {
      "/api": {
        pathRewrite: {
          "/api": "",
        },
        target: "https://dev.gateway.himedi.com",
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/_variable.scss";
        @import "@/assets/scss/_button.scss";
        @import "@/assets/scss/_font.scss";
        `,
      },
    },
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
    ],
  },
});
