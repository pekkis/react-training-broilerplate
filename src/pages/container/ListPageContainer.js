// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../ListPage';
import {
  addTodo
} from '../../ducks/todo';

export default connect(
  (state: Object, ownProps: Object) => ({
    user: state.user.get('users').find(u => u.id === ownProps.params.user),
    list: state.todo.get('lists').find(l => l.id === ownProps.params.list),
    todos: state.todo.get('todos').filter(t => t.list === ownProps.params.list),
  }),
  dispatch => bindActionCreators({
    addTodo,
  }, dispatch)
)(Wrapped);
