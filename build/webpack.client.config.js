const path = require('path');
const baseDir = process.cwd();
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(baseConfig, {
  entry: {
    'index': `${baseDir}/entry-client.js`
  },
  output: {
    path: path.resolve(__dirname, '../dist/client/'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.VUE_ENV': '"client"',
      'process.env.DEBUG_API': '"true"'
    }),
    new ExtractTextPlugin({
      filename: `css/index.css`,
      allChunks: true
    })
  ]
})