import {RECEIVE_LIKE, REMOVE_LIKE} from '../actions/like_actions';
import {RECEIVE_POSTS} from '../actions/post_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = {
  byId: {}
  // likePostId: [],
  // likeCommentId: [],
  // commentId: [],
  // postId: []
};

const likesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_LIKE:
      newState.byId[action.like.id] = action.like;
      // if (action.like.liked_type === 'Post') {
      //   newState.likedPostId.push(action.like.id);
      // } else {
      //   newState.likedCommentId.push(action.like.id);
      // }
      return newState;
    case REMOVE_LIKE:
      delete newState.byId[action.like.id]
      // let index;
      // if (action.like.liked_type === 'Post') {
      //   index = newState.likedPostId.indexOf(action.like.id);
      //   newState.likedPostId = newState.likedPostId.slice(0, index).concat(newState.likedPostId.slice(index + 1));
      // } else {
      //   index = newState.likedCommentId.indexOf(action.like.id);
      //   newState.likedCommentId = newState.likedCommentId.slice(0, index).concat(newState.likedCommentId.slice(index + 1));
      // }
      return newState;
    case RECEIVE_POSTS:
      return merge(defaultState, action.likes);
    case RECEIVE_USER:
      // if (!action.payload.view_content) return defaultState;
      return merge( defaultState, action.payload.likes);
    default:
      return state;
  }
}

export default likesReducer;
