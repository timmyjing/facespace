import {connect} from 'react-redux';
import {requestUsers, searchUsers} from '../../actions/user_actions';
import usersSelector from '../selectors/users_selector';
import SearchBar from './search_bar';

const mapStateToProps = state => ({
  users: state.ui.searchId.map( id => state.entities.users.byId[id])
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  searchUsers: query => dispatch(searchUsers(query))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
