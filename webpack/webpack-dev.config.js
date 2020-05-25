const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: [
    './src/app/app.js',
    './src/app/style.scss'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/app.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'sass-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
    }),
  ]
}

module.exports = config
