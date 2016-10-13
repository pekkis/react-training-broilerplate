// @flow

import React from 'react';
import styles from './TodoLists.pcss';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router';

type Props = {
  lists: List<ListType>,
};

const TodoLists = (props: Props) => {
  const { lists } = props;

  return (
    <ul>
      {lists.map(list => (
        <li key={list.id}><Link to={`/${list.user}/${list.id}`}>{list.name}</Link></li>
      ))}
    </ul>
  );
};

TodoLists.propTypes = {
  lists: ImmutablePropTypes.list.isRequired,
};

export default TodoLists;
