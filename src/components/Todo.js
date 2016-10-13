// @flow

import React from 'react';
import classnames from 'classnames';
import Icon from 'react-fa';
import styles from './Todo.pcss';
import { Button } from './form';

type Props = {
  todo: TodoType,
  onToggle: Function,
  onRemove: Function,
};

const Todo = ({ todo, onToggle, onRemove }: Props) => {

  const classes = classnames(
    styles.todo,
    {
      [styles.done]: todo.done,
    }
  );

  return (
    <li className={styles.root}>
      <span className={classes} onClick={onToggle.bind(null, todo.id)}>{todo.text}</span>
      <div>
        <Button onClick={onRemove.bind(null, todo.id)}>Remove</Button>
      </div>
    </li>
    );
};

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onToggle: React.PropTypes.func.isRequired,
};

export default Todo;
