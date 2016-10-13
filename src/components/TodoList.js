// @flow

import React from 'react';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Todo from './Todo';
import styles from './TodoList.pcss';

type Props = {
  todos: List<TodoType>,
  onRemove: Function,
  onToggle: Function,
  onAdd: Function,
};

const TodoList = ({ todos, onRemove, onToggle, onAdd }: Props): React.Element<any> => (
  <div className={styles.root}>
    <div className={styles.inner}>
      <ul>
        {todos.map((todo: TodoType): React.Element<any> => (
          <Todo
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  </div>
);

TodoList.propTypes = {
  todos: ImmutablePropTypes.list.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onToggle: React.PropTypes.func.isRequired,
};

export default TodoList;
