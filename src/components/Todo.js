// @flow

import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Icon from 'react-fa';
import styles from './Todo.pcss';
import { Button } from './form';

type Props = {
  todo: TodoType,
  onRemove: () => void,
  onMove: () => void
};

const Todo = ({ todo, onRemove, onMove }: Props) => {
  const classes = classnames(
    styles.root
  );

  return (
    <li className={classes}>
      <Link to={`/todo/${todo.id}`}>{todo.text}</Link>
      <div>
        <Button onClick={onRemove.bind(null, todo.id)}>Remove</Button>

        {todo.category !== 0 &&
          <Button onClick={onMove.bind(null, todo.id, -1)}>
            <Icon name="minus-circle" />
          </Button>
        }

        {todo.category !== 2 &&
          <Button onClick={onMove.bind(null, todo.id, 1)}>
            <Icon name="plus-circle" />
          </Button>
        }
      </div>
    </li>
    );
};

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onMove: React.PropTypes.func.isRequired,
};

export default Todo;
