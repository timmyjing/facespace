import {connect} from 'react-redux';
import {updateUser} from '../../actions/user_actions';

const mapStateToProps = state => ({
  user: state.entities.users.byId[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  edit: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
