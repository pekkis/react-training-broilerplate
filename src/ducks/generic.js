// @flow

import { List, Map } from 'immutable';

const defaultState: Map<string, any> = Map({
  loading: 0,
});

export default function (state: Map<string, any> = defaultState, action: ActionType) {
  const { type, payload } = action;
  switch (type) {

    case 'GET_USERS_PENDING':
    case 'GET_TODOS_PENDING':
    case 'GET_LISTS_PENDING':
      return state.update('loading', l => l + 1);

      case 'GET_USERS_FULFILLED':
      case 'GET_TODOS_FULFILLED':
      case 'GET_LISTS_FULFILLED':
        return state.update('loading', l => l - 1);

    default:
      return state;
  }
}
