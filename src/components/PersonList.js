// @flow

import React from 'react';
import Person from './Person';
import ImmutablePropTypes from 'react-immutable-proptypes';

const PersonList = (props) => {

  const { persons, ...rest } = props;

  if (persons.count() === 0) {
    return (
      <div>
        Ei tyyppejä.
      </div>
    );
  }

  const averageAge = persons.reduce(
    (r, person) => r + person.age,
    0
  ) / persons.count();

  return (
    <div>
      <p>
        Keski-ikä: <span>{averageAge}</span>
      </p>
      {persons.map(person =>
        <Person
          key={person.id}
          person={person}
          {...rest}
        />
      )}
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
};

export default PersonList;
