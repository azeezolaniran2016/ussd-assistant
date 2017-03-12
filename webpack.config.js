const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loaders: ['file-loader']
      },
      {
        test: /\.(woff|woff2)$/,
        loaders: ['url-loader?prefix=font/&limit=5000']
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loaders: ['url-loader?limit=10000&mimetype=application/octet-stream']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loaders: ['url-loader?limit=10000&mimetype=image/svg+xml']
      }
    ]},
    stats: {
      colors: true
    },
    devtool: 'source-map'
  };