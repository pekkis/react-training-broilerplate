// @flow

import { List, Map } from 'immutable';
import userService from '../services/user-service';

export function addUser(user: UserType): ActionType {
  return {
    type: 'ADD_USER',
    payload: userService.add(user),
  };
}

export function getUsers(): ActionType {
  return {
    type: 'GET_USERS',
    payload: userService.get(),
  };
}

const defaultState: Map<string, any> = Map({
  users: List(),
});

export default function (state: Map<string, any> = defaultState, action: ActionType) {
  const { type, payload } = action;
  switch (type) {
    case 'GET_USERS_FULFILLED':
      return state.set('users', payload);

    case 'ADD_USER_FULFILLED':
      return state.update('users', users => users.concat(payload))

    default:
      return state;
  }
}
