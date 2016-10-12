// @flow

import { List, Map } from 'immutable';
import todoService from '../services/todo-service.localhost';

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

export function moveTodo(id: string, direction: -1 | 1): ActionType {
  return {
    type: 'MOVE_TODO',
    payload: {
      id,
      direction,
    },
  };
}

export function receiveTodos(): ActionType {
  return {
    type: 'RECEIVE_TODOS',
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
  todos: List(),
  isChanged: false,
});

export default function (state: Map<string, any> = defaultState, action: ActionType) {
  switch (action.type) {

    case 'RECEIVE_TODOS_FULFILLED':
      return state.set('todos', action.payload);

    case 'ADD_TODO':
      return state
        .update('todos', todos => todos.push(action.payload))
        .set('isChanged', true);

    case 'REMOVE_TODO':
      return state
        .deleteIn([
          'todos',
          state.get('todos').findIndex(t => t.id === action.payload),
        ])
        .set('isChanged', true);

    case 'SAVE_TODOS_FULFILLED':
      return state.set('isChanged', false);

    case 'MOVE_TODO': {
      if (!action.payload) {
        throw new Error('Invalid move action');
      }

      const id = action.payload.id;
      const direction = action.payload.direction;
      if (!id || !direction) {
        throw new Error('Invalid action');
      }

      return state
      .updateIn(
        [
          'todos',
          state.get('todos').findIndex(t => t.id === id),
        ], todo => ({
          ...todo,
          category: todo.category + direction,
        })
      )
      .set('isChanged', true);
    }
    default:
      return state;

  }
}
