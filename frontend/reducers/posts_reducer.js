import {RECEIVE_POST} from '../actions/post_actions';
import {RECEIVE_USER} from '../actions/post_actions';
import merge from 'lodash/merge';

const defaultState = {
  byId: {},
  allId: []
};

const postsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POST:
      newState.byId[action.post.id] = action.post;
      return newState;
    case RECEIVE_USER:
      return merge(newState, action.payload.posts);
    default:
      return state;
  }
};

export default postsReducer;
