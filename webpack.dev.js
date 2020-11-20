const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {

  mode: 'development',

  devtool: 'eval',

  devServer: {
    contentBase: 'src',
    watchContentBase: true,
    hot: true,
    open: true,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 9000,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader', 'postcss-loader',
        ],
      },
    ]
  },

});
