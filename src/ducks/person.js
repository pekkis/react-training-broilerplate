// @flow

import { Map, List } from 'immutable';
import personService from '../services/personService';
import { createPerson } from '../utils/person';

export function getPersons() {
  return {
    type: 'GET_PERSONS',
    payload: personService.getPersons()
  };
}

export function addPerson() {
  return {
    type: 'ADD_PERSON',
    payload: createPerson(),
  };
}

export function removePerson(id: string) {
  return {
    type: 'REMOVE_PERSON',
    payload: id,
  };
}

const defaultState = Map({
  persons: List(),
});

export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_PERSONS_FULFILLED':
      return state.set('persons', payload);

    case 'ADD_PERSON':
      return state.update('persons', persons => persons.push(payload));

    case 'REMOVE_PERSON':
      return state.update('persons', persons => persons.filterNot(p => p.id === payload));

    default:
      return state;
  }
}
