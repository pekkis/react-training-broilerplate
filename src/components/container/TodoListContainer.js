// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../TodoList';
import { removeTodo, toggleTodo } from '../../ducks/todo';

export default connect(
  null,
  dispatch => bindActionCreators({
    onRemove: removeTodo,
    onToggle: toggleTodo,
  }, dispatch)
)(Wrapped);
