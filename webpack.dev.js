// path is built in node
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/dist')
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    contentBase: path.resolve(__dirname, 'app/dist'),
    hot: true
  }
});