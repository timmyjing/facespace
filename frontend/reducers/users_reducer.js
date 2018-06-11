import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER, RECEIVE_USERS, RECEIVE_SEARCHED_USERS} from '../actions/user_actions';
import {RECEIVE_FRIEND_REQUESTS} from '../actions/friend_request_actions';
import {RECEIVE_POSTS, RECEIVE_POST} from '../actions/post_actions';
import merge from 'lodash/merge';

const defaultState = {
  byId: {},
  allId: []
};
const usersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState.byId[action.user.id] = action.user;
      return newState;
    case RECEIVE_USERS:
      return merge(newState, action.users);
    case RECEIVE_SEARCHED_USERS:
      console.log('from users')
      newState = merge(action.users, newState);
      console.log(state);
      console.log(action);
      console.log(newState);
      // newState.allId = action.users.allId;
      return newState;
    case RECEIVE_USER:
      // newState = merge(action.payload.users, newState);
      // newState.byId[action.payload.user.id] = action.user;
      // return newState;
      return merge(newState, action.payload.users);
    case RECEIVE_FRIEND_REQUESTS:
      newState = merge(action.users, newState);
      return newState;
    case RECEIVE_POST:
      console.log(action.post);
      newState.byId[action.post.receiver_id].post_id.unshift(action.post.id);
      return newState;
    case RECEIVE_POSTS:
      return merge(action.users, newState);
    default:
      return state;
  }
};

export default usersReducer;
