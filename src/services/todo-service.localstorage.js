// @flow

/* global window */

import { List } from 'immutable';
import type { TodoServiceType } from './todo-service';

const service: TodoServiceType = {

  get: (): Promise<List<TodoType>> => {
    const todos = JSON.parse(window.localStorage.getItem('todos')) || [];
    return Promise.resolve(List(todos));
  },

  save: (todos: List<TodoType>): Promise<string> => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
    return Promise.resolve('ok');
  },
};

export default service;
