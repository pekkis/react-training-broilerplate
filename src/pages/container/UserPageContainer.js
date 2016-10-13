// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../UserPage';
import {
  addList
} from '../../ducks/todo';

export default connect(
  (state: Object, ownProps: Object) => ({
    user: state.user.get('users').find(u => u.id === ownProps.params.user),
    lists: state.todo.get('lists').filter(l => l.user === ownProps.params.user)
  }),
  dispatch => bindActionCreators({
    addList,
  }, dispatch)
)(Wrapped);
