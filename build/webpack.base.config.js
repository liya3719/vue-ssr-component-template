const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCssLoadersConf = {
  css: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: [{
        loader: "css-loader",
        options: {
          importLoaders: 1
        }
      },
      {
        loader: "postcss-loader"
      }
    ]
  }),
  less: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: [{
        loader: "css-loader",
        options: {
          importLoaders: 2
        }
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: "less-loader"
      }
    ]
  })
};
module.exports = {
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }, {
        test: /(\.ts|\.tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'ts-loader'
        }]
      },
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            //忽略哪些腳本是不进行编译打包的
            ignore: [],
            //缓存设置
            cacheDirectory: true
          }
        }]
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: false
          }
        }
      },
      {
        test: /\.less$/,
        use: extractCssLoadersConf.less
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.jsx',
      '.vue',
      '.gif',
      '.css',
      '.scss',
      '.png',
      '.jpg',
      '.less'
    ]
  }
}