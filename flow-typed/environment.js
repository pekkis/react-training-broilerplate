// @flow

declare type TodoType = {
  id: string,
  list: string,
  text: string,
  done: boolean,
};

declare type ListType = {
  id: string,
  user: string,
  name: string,
};

declare type UserType = {
  id: string,
  firstname: string,
  lastname: string,
  nick: string,
};

declare type ActionType = {
  type: string,
  payload?: any,
  error?: any,
  meta?: any
};
