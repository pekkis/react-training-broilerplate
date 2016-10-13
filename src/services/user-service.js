// @flow

import axios from 'axios';
import { List } from 'immutable';
import config from '../../config.client';

export default {
  get: (): Promise<List<UserType>> => (
    axios
      .get(`${config.api}/api/user`)
      .then((response: Object): Object => List(response.data))
  ),

  add: (user: UserType): Promise<UserType> => axios.post(`${config.api}/api/user`, user),
};
