import { connect } from 'react-redux';
import Wrapped from '../PersonPage';

export default connect(
  (state, ownProps) => ({
    person: state.person
      .get('persons')
      .find(p => p.id === ownProps.params.id),
  })
)(Wrapped);
