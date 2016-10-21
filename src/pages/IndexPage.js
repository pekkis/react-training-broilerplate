import React from 'react';
import PersonList from '../components/PersonList';
import Button from '../components/Button';

const IndexPage = props => {
  const { persons, handleRemoveUser, handleAddUser } = props;

  const males = persons
    .filter(person => person.gender === 'M');

  return (
    <div>

      <h2>Males</h2>

      <PersonList
        persons={males}
        onRemove={handleRemoveUser}
      />

      <h2>Females</h2>

      <PersonList
        persons={persons.filter(p => p.gender === 'F')}
        onRemove={handleRemoveUser}
      />

      <p>
        <Button block onClick={handleAddUser}>
          Lisää tyyppi
        </Button>
      </p>

    </div>
  )
};

export default IndexPage;
