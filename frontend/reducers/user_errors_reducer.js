import {RECEIVE_USER_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_POSTS} from '../actions/post_actions';



const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_USER:
      return [];
    case RECEIVE_POSTS:
      return [];
    default:
      return state;
  }
}

export default userErrorsReducer;
