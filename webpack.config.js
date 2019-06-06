var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dist/index.html',
  filename: './index.html',
  inject: 'body'
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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
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
  plugins: [HtmlWebpackPluginConfig],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};