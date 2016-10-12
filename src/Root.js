// @flow

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { receiveTodos } from './ducks/todo';
import { Provider } from 'react-redux';
import App from './components/container/AppContainer';
import IndexPage from './pages/container/IndexPageContainer';
import TodoPage from './pages/container/TodoPageContainer';

type DispatchType = (action: ActionType | ThunkAction | PromiseAction) => any;
type GetStateType = () => Object;
type ThunkAction = (dispatch: DispatchType, getState: GetStateType) => any;
type PromiseAction = Promise<ActionType>;

type StoreType = {
  dispatch: DispatchType
};

type HistoryType = {

};

type Props = {
  store: StoreType,
  history: HistoryType,
  isInitial: Boolean
};

export default function Root({ store, history, isInitial }: Props) {

  function initApp(nextState, replaceState) {

    // Hot reloading kludge, how to prevent dis?
    if (!isInitial) {
      return;
    }

    store.dispatch(receiveTodos());
  }

  /*
  function requiresLogin(nextState, replaceState) {
      const user = store.getState().user.get('user');

      if (user.anonymous) {
          replaceState(
              {
                  'next': nextState.location.pathname,
              },
              '/login'
          );
      }
  }
  */

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} onEnter={initApp}>
          <IndexRoute component={IndexPage} />
          <Route path="todo/:uuid" component={TodoPage} />
        </Route>
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};
