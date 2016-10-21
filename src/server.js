import uuid from 'node-uuid';
import bodyParser from 'body-parser';
import { createServer } from './utils/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';
import { List, Range, Map } from 'immutable';
import { createPerson } from './utils/person';

import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import ServerRoot from './ServerRoot';
import routes from './routes';
import { match } from 'react-router';

createServer(config, webpackConfig, (app) => {
  app.use(bodyParser.json());

  let persons = Range(0, 10)
    .map(createPerson)
    .toList();

  app.get('/api/person', (req, res) => {
    setTimeout(
      () => res.send(persons),
      Math.random() * 2000
    );
  });

  app.get('*', (req, res) => {

    const initialState = {
      person: Map({
        persons: List(persons),
      }),
    };

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message);
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          res
            .status(200)
            .set({ 'content-type': 'text/html; charset=utf-8' })
            .send(
              "<!DOCTYPE html>\n" +
              renderToStaticMarkup(
                <ServerRoot url={req.url} initialState={initialState} />
              )
            );
        } else {
          res.status(404).send('Not found');
        }
      });

  });

  return Promise.resolve();
});
