import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import IndexPage from './pages/container/IndexPageContainer';
import PersonPage from './pages/container/PersonPageContainer';

import { Provider } from 'react-redux';
import { getPersons } from './ducks/person';

import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore } from './utils/redux';
import * as reducers from './ducks';

import { getUniversalState } from 'react-html-document';
import { Map, List } from 'immutable';

function getInitialState() {
  try {
    const state = getUniversalState();
    return {
      person: Map({
        persons: List(state.person.persons),
      }),
    };
  } catch(e) {
    return undefined;
  }
}

const initialState = getInitialState();

const { store, history } = createStore(
  reducers,
  browserHistory,
  [
    thunk,
    promiseMiddleware(),
    createLogger(),
  ],
  [],
  initialState
);

const Root = props => {

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexPage} />

          <Route
            path="person/:id"
            component={PersonPage}
          />

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
