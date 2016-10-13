// @flow

import { List, Map } from 'immutable';
import todoService from '../services/todo-service';

export function addList(list: ListType): ActionType {
  return {
    type: 'ADD_LIST',
    payload: todoService.addList(list),
  };
}

export function getLists(): ActionType {
  return {
    type: 'ADD_LIST',
    payload: todoService.getLists(),
  };
}


export function addTodo(todo: TodoType): ActionType {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
}

export function removeTodo(id: string): ActionType {
  return {
    type: 'REMOVE_TODO',
    payload: id,
  };
}

export function toggleTodo(id: string): ActionType {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
}

export function getTodos(): ActionType {
  return {
    type: 'GET_TODOS',
    payload: todoService.get(),
  };
}

export function saveTodos(todos: List<TodoType>): ActionType {
  return {
    type: 'SAVE_TODOS',
    payload: todoService.save(todos),
  };
}

const defaultState: Map<string, any> = Map({
  lists: List(),
  todos: List(),
  isChanged: false,
});

export default function (state: Map<string, any> = defaultState, action: ActionType) {
  const { type, payload } = action;

  switch (action.type) {
    case 'GET_LISTS_FULFILLED':
      return state.set('lists', payload);

    case 'ADD_LIST_FULFILLED':
      return state.update('lists', lists => lists.concat(payload));

    case 'GET_TODOS_FULFILLED':
      return state.set('todos', payload);

    case 'ADD_TODO':
      return state
        .update('todos', todos => todos.push(payload))
        .set('isChanged', true);

    case 'REMOVE_TODO':
      return state
        .deleteIn([
          'todos',
          state.get('todos').findIndex(t => t.id === payload),
        ])
        .set('isChanged', true);

    case 'SAVE_TODOS_FULFILLED':
      return state.set('isChanged', false);

    case 'TOGGLE_TODO': {
      if (!payload) {
        throw new Error('Invalid toggle action');
      }

      const id = payload.id;
      if (!id) {
        throw new Error('Invalid action');
      }

      return state
      .updateIn(
        [
          'todos',
          state.get('todos').findIndex(t => t.id === id),
        ], todo => ({
          ...todo,
          done: !todo.done,
        })
      )
      .set('isChanged', true);
    }
    default:
      return state;

  }
}
