const webpack = require('webpack');

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["react", "env", "stage-3"]
        }
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
    historyApiFallback: true,
    contentBase: "./"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
