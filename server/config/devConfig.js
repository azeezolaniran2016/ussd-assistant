import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.config.dev';

const compiler = webpack(config);

/**
 * Function to set up webpack configuration for development server
 * @param {Object} app - express app
 * @returns {undefined} - returns undefined
 */
export default function (app) {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}