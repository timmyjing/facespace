import {connect} from 'react-redux';
import Main from './main';
import {fetchFeed} from '../../actions/user_actions';

const mapStateToProps = state => ({
  users: state.entities.users.byId,
  user: state.entities.users.byId[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: () => dispatch(fetchFeed())
});

export default connect(mapStateToProps, null)(Main);
