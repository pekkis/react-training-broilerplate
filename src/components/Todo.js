// @flow

import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
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
    styles.root
  );

  return (
    <li className={classes}>
      <Link to={`/todo/${todo.id}`}>{todo.text}</Link>
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
