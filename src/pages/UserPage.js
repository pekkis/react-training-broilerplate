// @flow

import React from 'react';
import { Link } from 'react-router';
import { List } from 'immutable';

type Props = {
  user: UserType,
  lists: List<UserType>,
};

const UserPage = (props: Props): React.Element<any> => {

  const { user, lists } = props;

  return (
    <section>
      <h2>{user.nick}</h2>

      <ul>
        {lists.map(list => (
          <li key={list.id}><Link to={`/${user.id}/${list.id}`}>{list.name}</Link></li>
        ))}
      </ul>


    </section>
  );
};

UserPage.propTypes = {
};

export default UserPage;
