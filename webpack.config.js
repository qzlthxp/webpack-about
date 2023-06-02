const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000, //端口号
    hot: true //热更
  },
  // entry: './src/index.js',
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  entry: {
    'js/index': './src/index.js',
    'js/main': './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 2048,
              name: '[name]_[hash:8].[ext]',
              outputPath: 'image'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.less$/,
      //   exclude: [/node_modules/],
      //   use: ['style-loader', 'css-loader', 'less-loader']
      // }
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: MinCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './src/static', //原始位置
          to: './static' //打包到的位置
        }
      ]
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new MinCssExtractPlugin({
      filename: 'css/index.css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    })
  ]
}
