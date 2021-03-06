// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../IndexPage';
import {
  addUser
} from '../../ducks/user';

export default connect(
  (state: Object) => ({
    users: state.user.get('users'),
  }),
  dispatch => bindActionCreators({
    addUser,
  }, dispatch)
)(Wrapped);
