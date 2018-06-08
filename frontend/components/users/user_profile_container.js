import {connect} from 'react-redux';
import UserProfile from './user_profile';
import { withRouter } from 'react-router'
import {requestUser} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users.byId[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
