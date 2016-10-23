// @flow

import { List } from 'immutable';
import config from '../../config.client';
import axios from 'axios';

export default {

  getPersons: (): Promise<List<PersonType>> => {
    return axios.get(config.api + '/api/person')
      .then(ret => ret.data)
      .then((persons: Array<PersonType>) => List(persons));
  }

}
