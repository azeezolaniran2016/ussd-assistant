const webpack = require('webpack');
const path = require('path');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    // necessary for hot reloading with IE
    'eventsource-polyfill',
    // note that it reloads the page if hot module reloading fails.
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'client/index')
  ],
  target: 'web',
  output: {
    // Note: Physical files are only output by the production build task.
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel-loader']
      },
      {
        test: /(\.css)$/,
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
    ]
  }
};
