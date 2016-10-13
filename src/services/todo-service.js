// @flow

import axios from 'axios';
import { List } from 'immutable';
import config from '../../config.client';

export default {

  get: (): Promise<List<TodoType>> => (
    axios
      .get(`${config.api}/api/todo`)
      .then((response: Object): Object => List(response.data))
  ),

  save: (todos: List<TodoType>): Promise<any> => axios.post(`${config.api}/api/todo`, todos),

  getLists: (): Promise<List<ListType>> => (
    axios
      .get(`${config.api}/api/list`)
      .then((response: Object): Object => List(response.data))
  ),

  addList: (list: ListType): Promise<ListType> => axios.post(`${config.api}/api/list`, list),

};
