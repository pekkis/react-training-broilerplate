// @flow

import React from 'react';
import { Link } from 'react-router';
import { List } from 'immutable';
import TodoLists from '../components/TodoLists';

type Props = {
  user: UserType,
  lists: List<UserType>,
};

const UserPage = (props: Props): React.Element<any> => {

  const { user, lists } = props;

  return (
    <section>

      <h2>{user.nick}</h2>

      <TodoLists lists={lists} />

    </section>
  );
};

UserPage.propTypes = {
};

export default UserPage;
