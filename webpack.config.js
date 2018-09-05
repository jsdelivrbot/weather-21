const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // { test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=8192" },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: { name: "[path][name].[hash].[ext]" }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    inline: true,
    open: true,
    compress: true,
    hot: true
  }
};
