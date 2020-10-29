const path = require('path');

module.exports = {
  css: {
    extract: false,
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    svgRule
      .test(/\.svg$/)
      .use('svg-url-loader')
      .loader('svg-url-loader');
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
        src: path.resolve('src'),
        assets: path.resolve('src/assets'),
        components: path.resolve('src/components'),
        utils: path.resolve('src/utils'),
      },
    },
  },
};
