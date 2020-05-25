const common = require('./webpack-dev.config')
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const vueConfig = merge(common, {
  module:{
    rules:[
      {
        exclude: /(node_modules|bower_components|vendors)/,
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
  },
  plugins:[
    new VueLoaderPlugin()
  ],
})

module.exports = vueConfig