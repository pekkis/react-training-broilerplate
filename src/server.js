import uuid from 'node-uuid';
import bodyParser from 'body-parser';
import { createServer } from './utils/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';
import { List, Range, Map } from 'immutable';
import { createPerson } from './utils/person';
import * as reducers from './ducks';


import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import ServerRoot from './ServerRoot';
import routes from './routes';
import { match, createMemoryHistory } from 'react-router';

import express from 'express';
import axios from 'axios';
import { trigger } from 'redial';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';

import thunk from 'redux-thunk';
import { createStore } from './utils/redux';



const app = express();

app.use(bodyParser.json());

let persons = Range(0, 10)
  .map(createPerson)
  .toList();

app.get('/api/person', (req, res) => {
  res.send(persons);
});

app.get('*', (req, res) => {

  /*
  const initialState = {
    person: Map({
      persons: List(persons),
    }),
  };
  */

  const memoryHistory = createMemoryHistory(req.url);
  const { store, history } = createStore(
    reducers,
    memoryHistory,
    [
      thunk,
      promiseMiddleware(),
      createLogger()
    ],
    []
  );

  match({ routes, history }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {

        const { components } = renderProps;
        // Define locals to be provided to all lifecycle hooks:
        const locals = {
          path: renderProps.location.pathname,
          query: renderProps.location.query,
          params: renderProps.params,
          dispatch: store.dispatch,
        };

        console.log(components);

        trigger('fetch', components, locals).then(() => {
          res
            .status(200)
            .set({ 'content-type': 'text/html; charset=utf-8' })
            .send(
              "<!DOCTYPE html>\n" +
              renderToStaticMarkup(
                <ServerRoot
                  renderProps={renderProps}
                  store={store}
                  title={config.html.title}
                  css={config.html.css}
                />
              )
            );
          }).catch(e => {
            res.status(500).send(e);
          });
      } else {
        res.status(404).send('Not found');
      }
    });

});

const port = config.port + 1;

app.listen(port);
console.log('Listening on port ' + port);
