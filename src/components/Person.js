// @flow

import React from 'react';
import styles from './Person.pcss';
import Button from './Button';
import { Link } from 'react-router';

type Props = {
  person: PersonType,
  onRemove: (id: string) => void,
};

const Person = (props: Props) => {
  const { person, onRemove } = props;
  return (
    <div className={styles.root}>

      <Link
        to={`/person/${person.id}`}
      >
        {person.firstName} {person.lastName} ({person.gender})
      </Link>
      <Button onClick={() => onRemove(person.id)}>remove me</Button>
    </div>
  );
};

Person.propTypes = {
  person: React.PropTypes.object.isRequired,
};

export default Person;
