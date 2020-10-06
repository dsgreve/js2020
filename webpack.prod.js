const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.[contentHash].js',
    path: path.resolve(__dirname, 'app/dist')
  }
});