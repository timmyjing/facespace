import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER, RECEIVE_USERS, RECEIVE_SEARCHED_USERS} from '../actions/user_actions';
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
      // if (!newState.allIds.includes(action.user.id)) newState.allIds.push(action.user.id);
      return newState;
    case RECEIVE_USERS:
      return merge(newState, action.users);
    case RECEIVE_SEARCHED_USERS:
      console.log(action.users);
      newState = merge({byId: action.users.byId}, newState);
      console.log(newState);
      newState.allId = action.users.allId;
      return newState;
    case RECEIVE_USER:
      // newState.byId[action.user.id] = action.user;
      // if (!newState.allIds.includes(action.user.id)) newState.allIds.push(action.user.id);
      return merge(newState, action.user);
    default:
      return state;
  }
};

export default usersReducer;
