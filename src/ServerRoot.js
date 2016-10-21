import React from 'react';
import { createMemoryHistory, Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore } from './utils/redux';
import * as reducers from './ducks';
import HTMLDocument from 'react-html-document';
import routes from './routes';
import manifest from '../dist/manifest.json';

const ServerRoot = props => {

  const { initialState, url } = props;

  const memoryHistory = createMemoryHistory();
  const { store, history } = createStore(
    reducers,
    memoryHistory,
    [
      thunk,
      promiseMiddleware(),
      createLogger(),
    ],
    [],
    initialState
  );

  history.push(url);

  return (
    <HTMLDocument
      title="React Training Broilerplate"
      scripts={[manifest.publicPath + manifest.assets['client.js']]}
      stylesheets={[manifest.publicPath + manifest.assets['client.css']]}
      metatags={[
        { name: 'charset', content: 'utf-8' }
      ]}
      universalState={initialState}
    >
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    </HTMLDocument>
  );
};

export default ServerRoot;
