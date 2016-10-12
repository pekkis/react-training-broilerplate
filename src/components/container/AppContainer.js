// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../App';
import { receiveTodos } from '../../ducks/todo';

export default connect(
  null,
  dispatch => bindActionCreators({
    receiveTodos,
  }, dispatch)
)(Wrapped);
