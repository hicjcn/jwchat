const webpack = require('webpack');
const version = process.env.VERSION || require('./package.json').version;

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
    ]
  }
};