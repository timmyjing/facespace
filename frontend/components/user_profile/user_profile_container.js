import {connect} from 'react-redux';
import UserProfile from './user_profile';
import { withRouter } from 'react-router'
import {requestUser} from '../../actions/user_actions';
import {createFriendRequest, acceptFriendRequest, declineFriendRequest} from '../../actions/friend_request_actions';


const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users.byId[ownProps.match.params.userId],
  session: state.sessions.id,
  users: state.entities.users.byId
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  createFriendRequest: requestee_id => dispatch(createFriendRequest(requestee_id)),
  acceptFriendRequest: request => dispatch(acceptFriendRequest(request)),
  declineFriendRequest: request => dispatch(declineFriendRequest(request))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
