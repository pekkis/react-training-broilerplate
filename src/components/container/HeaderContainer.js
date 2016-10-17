// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../Header';
import { saveTodos } from '../../ducks/todo';

export default connect(
  (state: Object) => ({
    isChanged: state.todo.get('isChanged'),
    todos: state.todo.get('todos'),
  }),
  dispatch => bindActionCreators({
    saveTodos,
  }, dispatch)
)(Wrapped);
