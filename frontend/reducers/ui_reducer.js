import merge from 'lodash/merge';
import {RECEIVE_SEARCHED_USERS, CLEAR_SEARCHED_USERS} from '../actions/user_actions';

const defaultState = ({
  loading: false,
  searchId: []
});

const uiReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_SEARCHED_USERS:
      console.log(action);
      let newState = merge({}, state);
      newState.searchId = action.users.allId;
      return newState;
    case CLEAR_SEARCHED_USERS:
      return defaultState;
    default:
      return state;
  }
};


export default uiReducer;
