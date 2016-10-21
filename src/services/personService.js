// @flow

import { List } from 'immutable';

export default {

  getPersons: (): Promise<List<PersonType>> => {
    return fetch('/api/person')
      .then(ret => ret.json())
      .then((persons: Array<PersonType>) => List(persons));
  }

}
