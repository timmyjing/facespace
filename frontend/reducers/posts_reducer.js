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
    // returning only posts fetched for news feed instead of merging to save memory
      // return merge(newState, action.posts);
      return action.posts;
    case RECEIVE_USER:
      // return merge(newState, action.payload.posts);
      // when loading a user profile, only store their posts in the post slice of state, news feed fetches new posts anyways
      return action.payload.posts;
    default:
      return state;
  }
};

export default postsReducer;
