import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IndexPage from '../IndexPage';
import { getPersons, removePerson, addPerson } from '../../ducks/person';

export default connect(
  (state: Object) => ({
    persons: state.person.get('persons'),
  }),
  (dispatch) => bindActionCreators({
    handleAddUser: addPerson,
    handleRemoveUser: removePerson,
  }, dispatch)
)(IndexPage);
