// @flow

import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import TodoForm from '../components/TodoForm';
import TodoLists from '../components/TodoLists';

type Props = {
  saveTodos: () => void,
  addTodo: () => void,
  isChanged: boolean,
  todos: List<Object>,
  removeTodo: () => void,
  moveTodo: () => void,
};

const IndexPage = (props: Props): React.Element<any> => {
  const {
    saveTodos,
    addTodo,
    isChanged,
    todos,
    removeTodo,
    moveTodo,
  } = props;

  return (
    <section>
      Hellurei

    </section>
  );
};

IndexPage.propTypes = {
  saveTodos: React.PropTypes.func.isRequired,
  addTodo: React.PropTypes.func.isRequired,
  removeTodo: React.PropTypes.func.isRequired,
  moveTodo: React.PropTypes.func.isRequired,
  isChanged: React.PropTypes.bool.isRequired,
  todos: ImmutablePropTypes.list.isRequired,
};

export default IndexPage;
