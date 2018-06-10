import {connect} from 'react-redux';
import Main from './main';
import {fetchFeed, requestUser} from '../../actions/user_actions';

const mapStateToProps = state => ({
  users: state.entities.users.byId,
  currentUser: state.entities.users.byId[state.sessions.id]
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: () => dispatch(fetchFeed()),
  // requestCurrentUser to grab current user info and friends to test friendship for now
  requestCurrentUser: id => dispatch(requestUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
