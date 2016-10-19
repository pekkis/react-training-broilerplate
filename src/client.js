/* global document */
/* eslint global-require: "off" */

import React from 'react';
import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import Root from './Root';

/*
import { browserHistory } from 'react-router';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore } from './utils/redux';
import * as reducers from './ducks';

const { store, history } = createStore(
  reducers,
  browserHistory,
  [
    thunk,
    promiseMiddleware(),
    createLogger(),
  ]
);
*/

const root = document.getElementById('app');
render(
  <Root />,
  root
);

/*
render(
  <AppContainer>
    <Root />
  </AppContainer>,
  root
);

// No I don't understand what happens under the hood but it works :)
if (module.hot) {
  module.hot.accept('./Root', () => {
    const Root = require('./Root').default;
    render(
      <AppContainer>
        <Root />
      </AppContainer>,
      root
    );
  });
}
*/
