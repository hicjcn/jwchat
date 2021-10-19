const webpack = require('webpack');
const version = process.env.VERSION || require('./package.json').version;
const isProduction = process.env.NODE_ENV === 'production'
const utils = require('./build/utils.js')

const banner =
  ' JwChat.js v' +
  version +
  '\n' +
  ' (c) 2020-' +
  new Date().getFullYear() +
  ' codeGI\n' +
  ' Released under the MIT License.\n';

module.exports = {
  publicPath: './',
  css: {
    extract: false
  },
  //去除生产环境的 productionSourceMap
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default',
      libraryTarget: 'umd',
      // library: 'JwChat',
      umdNamedDefine: true,
      // globalObject: 'typeof self !== \'undefined\' ? self : this',
    },
    plugins: [
      new webpack.BannerPlugin(banner)
    ],
    externals: isProduction? utils.externalModules: {}
  },
  chainWebpack: config => {
    if(process.env.npm_lifecycle_event!=='lib') {
      config.plugin('html').tap(opts => {
        opts[0].cdnConfig = utils.cdnConfig, // cdn配置
        opts[0].isExternal = isProduction //是否加载js，dev下默认不加载
        return opts
      })
    }
  }
};