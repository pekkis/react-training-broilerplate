// @flow

import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import TodoForm from '../components/TodoForm';
import TodoLists from '../components/TodoLists';
import { Link } from 'react-router';

type Props = {
  addUser: Function,
  users: List<UserType>,
};

const IndexPage = (props: Props): React.Element<any> => {
  const { users } = props;

  return (
    <section>
      <h2>Users</h2>

      <ul>
        {users.map(user => (
          <li key={user.id}><Link to={`/${user.id}`}>{user.nick}</Link></li>
        ))}
      </ul>

    </section>
  );
};

IndexPage.propTypes = {
  addUser: React.PropTypes.func.isRequired,
  users: ImmutablePropTypes.list.isRequired,
};

export default IndexPage;
