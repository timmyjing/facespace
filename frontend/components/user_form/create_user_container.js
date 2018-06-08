import {connect} from 'react-redux';
import UserForm from './user_form';
import {signup} from '../../actions/session_actions';
import userErrorsSelector from '../selectors/user_errors_selector';

const mapStateToProps = state => ({
  errors: userErrorsSelector(state.errors.user)
});

const mapDispatchToProps = dispatch => ({
  submit: user => dispatch(signup(user)),
  demoLogin: () => dispatch(demoLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
