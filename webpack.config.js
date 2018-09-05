const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
  template: './index.html',
  filename: 'index.html'
});
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
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
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
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
  plugins: [HtmlWebpackPluginConfig, MiniCssExtractPluginConfig, HMR]
};
