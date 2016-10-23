import { createServer } from './utils/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';
import path from 'path';
import util from 'util';

console.log(util.inspect(webpackConfig, { depth: 666}));

import proxy from 'express-http-proxy';

createServer(config, webpackConfig, (app, httpServer, devMiddleware) => {

  /*
  app.get('*', (req, res) => {

    const { assetsByChunkName } = res.locals.webpackStats.toJson();

    const index = devMiddleware.fileSystem.readFileSync(
      path.join(webpackConfig.output.path, 'index.html')
    );
    res.end(index);

  });
  */

  app.get('*', proxy('localhost:' + (config.port + 1)));


  return Promise.resolve();
});
