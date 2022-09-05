module.exports = {
  // initialize scss variables for the whole project
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
