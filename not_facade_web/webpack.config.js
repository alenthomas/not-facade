var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'dev_bundle/')
var APP_DIR = path.resolve(__dirname, 'src/')

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        exclude: /node-modules/,
        query:
          {
            presets: ['react']
          }
      },
      // {
      //   test: /\.scss$/, // regex to select only .css files
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true
      //       }
      //     },
      //     {
      //       loader: 'sass-loader'
      //     }
      //   ] // loader: 'style-loader!css-loader!sass-loader'
      // },
      { test: /\.css$/, loader: 'css-loader', exclude: '/node-modules/' },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file-loader'
      }
    ]
  }
}

module.exports = config
