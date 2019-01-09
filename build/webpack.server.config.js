const path = require('path');
const baseDir = process.cwd();
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const nodeExternals = require('webpack-node-externals');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = merge(baseConfig, {
  target: 'node',
  entry: {
    'index': `${baseDir}/entry-server.js`
  },
  output: {
    path: path.resolve(__dirname, '../dist/server/'),
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      filename: `css/index.css`,
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.VUE_ENV': '"server"'
    })
  ],
  externals: nodeExternals({
    whitelist: /\.css$/
  })
});