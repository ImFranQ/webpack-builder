const common = require('./webpack-dev.config')
const merge = require('webpack-merge');

const vueConfig = merge(common, {
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
})

module.exports = vueConfig