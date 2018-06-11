import usersReducer from './users_reducer';
import friendRequestsReducer from './friend_requests_reducer';
import postsReducer from './posts_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  users: usersReducer,
  friendRequests: friendRequestsReducer,
  posts: postsReducer
});
