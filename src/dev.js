import { createServer } from './utils/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';

createServer(config, webpackConfig, (app) => {
  return Promise.resolve();
});
