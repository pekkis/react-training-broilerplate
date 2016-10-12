// @flow

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { receiveTodos } from './ducks/todo';
import App from './components/container/AppContainer';
import IndexPage from './pages/container/IndexPageContainer';
import TodoPage from './pages/container/TodoPageContainer';

type DispatchType = (action: ActionType | ThunkActionType | PromiseActionType) => any;
type GetStateType = () => Object;
type ThunkActionType = (dispatch: DispatchType, getState: GetStateType) => any;
type PromiseActionType = Promise<ActionType>;

type StoreType = {
  dispatch: DispatchType
};

type HistoryType = {

};

type Props = {
  store: StoreType,
  history: HistoryType,
  isInitial: boolean
};

export default function Root({ store, history, isInitial = false }: Props) {
  function initApp() {
    // Hot reloading kludge, how to prevent dis?
    if (!isInitial) {
      return;
    }
    store.dispatch(receiveTodos());
  }

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
  isInitial: React.PropTypes.bool.isRequired,
};

Root.defaultProps = {
  isInitial: false,
};
