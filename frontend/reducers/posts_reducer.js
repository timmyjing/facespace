import {RECEIVE_POST, RECEIVE_POSTS} from '../actions/post_actions';
import {RECEIVE_USER} from '../actions/user_actions';
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
      newState.allId.unshift(action.post.id);
      return newState;
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_USER:
      return merge(newState, action.payload.posts);
    default:
      return state;
  }
};

export default postsReducer;
