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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts'
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8000,
    hot: true
  }
}

module.exports = config
