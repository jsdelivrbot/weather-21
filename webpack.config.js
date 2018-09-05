const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
  template: './index.html',
  filename: 'index.html'
});
const HMR = new webpack.HotModuleReplacementPlugin();

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      // { test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=8192" },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: { name: '[path][name].[hash].[ext]' }
      }
    ]
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true,
    open: true,
    compress: true,
    hot: true
  },
  plugins: [HtmlWebpackPluginConfig, HMR]
};
