const path = require('path');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(dir => new HtmlWebpackPlugin({
  filename: path.basename(dir),
  template: dir,
  minify: false
}));

module.exports = {

  entry: ['./src/js/index.js', './src/css/style.css'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  stats: {
    colors: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public", 
          to: "./",
          noErrorOnMissing: true
        }
      ],
    }),
    ...generateHTMLPlugins()
  ]

}