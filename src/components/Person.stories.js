import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Person from './Person';
import { createPerson } from '../utils/person';

const person = createPerson();

storiesOf('Person', module)
  .add('Person', () => (
    <Person
      person={person}
      onRemove={action('removado')}
    />
  ))
;
