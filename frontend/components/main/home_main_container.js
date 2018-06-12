import {connect} from 'react-redux';
import Main from './main';
import {fetchFeed, requestCurrentUser} from '../../actions/user_actions';

const mapStateToProps = state => ({
  users: state.entities.users.byId,
  currentUser: state.entities.users.byId[state.sessions.id]
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: () => dispatch(fetchFeed()),
  requestCurrentUser: () => dispatch(requestCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
