// @flow

import { connect } from 'react-redux';
import Wrapped from '../TodoPage';

export default connect(
  (state: Object) => ({
    todos: state.todo.get('todos'),
  })
)(Wrapped);
