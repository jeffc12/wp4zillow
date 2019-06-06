var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
                presets: ["@babel/preset-react", "@babel/preset-env"]
              }
            },
          ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};