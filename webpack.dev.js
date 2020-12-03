const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',
  
  devtool: 'eval-cheap-module-source-map',

  entry: {
    index: './src/page-index/app.js',
    mentions: './src/page-mentions/app.js'
  },

  devServer: {
    port: 8080,
    open: true,
    writeToDisk: false
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?hash=[hash:20]',
            outputPath: 'fonts/',
          },
        }],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]?hash=[hash:20]',
              esModule: false,
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  plugins: [    
    new HtmlWebpackPlugin({
      template: './src/page-index/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-mentions/mentions.html',
      inject: true,
      chunks: ['mentions'],
      filename: 'mentions.html'
    })
  ]

};
