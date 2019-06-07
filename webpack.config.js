var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dist/index.html',
  filename: './index.html',
  inject: 'body'
})

var MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: 'style.[contenthash].css'
})

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'main.[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/react", "@babel/preset-env"],
          compact: false
        }
      },
    ]
  },
  plugins: [HtmlWebpackPluginConfig, MiniCssExtractPluginConfig],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};