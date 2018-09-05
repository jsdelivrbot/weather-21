const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
  template: './index.html',
  filename: 'index.html'
});

module.exports = {
  module: {
    rules: [
      {
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true,
    open: true,
    compress: true,
    hot: true
  },
  plugins: [HtmlWebpackPluginConfig]
};
