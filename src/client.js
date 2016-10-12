/* global document */
/* eslint global-require: "off" */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createStore } from './broilerplate-util/redux';
import * as reducers from './ducks';
import Root from './Root';

const { store, history } = createStore(
  reducers,
  browserHistory,
  [
    thunk,
    promiseMiddleware(),
  ]
);
const root = document.getElementById('app');

render(
  <AppContainer>
    <Root store={store} history={history} isInitial />
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootElm = require('./Root').default;
    render(
      <AppContainer>
        <RootElm store={store} history={history} />
      </AppContainer>,
      root
    );
  });
}
