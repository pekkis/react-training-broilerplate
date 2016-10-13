// @flow

import React from 'react';
import { List } from 'immutable';
import TodoList from '../components/container/TodoListContainer';
import TodoForm from '../components/container/TodoFormContainer';

type Props = {
  user: UserType,
  list: ListType,
  todos: List<TodoType>,
};

const ListPage = (props: Props): React.Element<any> => {
  const { user, list, todos } = props;

  return (
    <section>

      <h2>{user.nick} > {list.name}</h2>

      <TodoList todos={todos} />

      <TodoForm list={list} />

    </section>
  );
};

ListPage.propTypes = {

};

export default ListPage;
