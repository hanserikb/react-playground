var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/app/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    overlay: true,
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
  ]
};