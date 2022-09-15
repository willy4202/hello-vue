module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/[file_nam].scss";
            `,
      },
    },
  },

  productionSourceMap: true,

  //stoping ESlint
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
