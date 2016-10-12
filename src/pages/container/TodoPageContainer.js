// @flow

import { connect } from 'react-redux';
import Wrapped from '../TodoPage';

export default connect(
  (state: Object, ownProps: Object) => ({
    todo: state.todo.get('todos').find(todo => todo.id === ownProps.params.uuid),
  })
)(Wrapped);
