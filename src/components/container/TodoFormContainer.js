// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../TodoForm';
import { addTodo } from '../../ducks/todo';

export default connect(
  null,
  dispatch => bindActionCreators({
    onAdd: addTodo,
  }, dispatch)
)(Wrapped);
