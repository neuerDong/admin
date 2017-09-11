var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: [
      'react'
    ],
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'script/app.bundle.js',
    publicPath: '/build/'
  },

  resolve: {
    extensions: ['.js', 'jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loader: 'css-loader',
        options: {
          minimize: true
        }
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'less-loader'
          ]
        })
      },
      {
        test: /\.(jpg|jpeg|png|gif|bmp)/,
        loader: 'url-loader?limit=1&name=images/[name].[hash:8].[ext]'
      }
    ]
  },

  plugins: [
    // html 模板
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    // css 分离
    new ExtractTextPlugin('style/app.bundle.css'),

    // 提取公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'script/vendor.js'
    }),

    // 压缩 js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
