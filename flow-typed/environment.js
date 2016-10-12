// @flow

declare type TodoType = {
  id: string,
  category: number,
  text: string
};

declare type ActionType = {
  type: string,
  payload?: any,
  error?: any,
  meta?: any
};
