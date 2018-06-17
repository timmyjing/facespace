import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER, RECEIVE_USERS, RECEIVE_SEARCHED_USERS} from '../actions/user_actions';
import {RECEIVE_FRIEND_REQUESTS, ACCEPT_FRIEND_REQUEST, REMOVE_FRIEND} from '../actions/friend_request_actions';
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
      newState = merge( {byId: action.payload.byId}, newState);
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
      newState.byId[action.post.receiver_id].post_id.unshift(action.post.id);
      return newState;
    case RECEIVE_POSTS:
      return merge(action.users, newState);
    case ACCEPT_FRIEND_REQUEST:
      newState.byId[action.request.requestee_id].friends_id.push(action.request.requester_id);
      return newState;
    case REMOVE_FRIEND:
      newState.byId[action.friendship.user_id].friendship = null;
      let friendsId = newState.byId[action.friendship.user_id].friends_id;
      let friendIndex = friendsId.indexOf(action.friendship.friend_id);
      newState.byId[action.friendship.user_id].friends_id = friendsId.slice(0, friendIndex).concat(friendsId.slice(friendIndex + 1));
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
