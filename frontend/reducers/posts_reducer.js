import {RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST, EDIT_POST} from '../actions/post_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
import merge from 'lodash/merge';

const defaultState = {
  byId: { comment_id: [] },
  allId: []
};

const postsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let postIndex;
  switch (action.type) {
    case RECEIVE_POST:
      newState.byId[action.post.id] = action.post;
      newState.allId.unshift(action.post.id);
      return newState;
    case RECEIVE_POSTS:
    // returning only posts fetched for news feed instead of merging to save memory
      // return merge(newState, action.posts);
      newState.byId = action.posts.byId || {};
      newState.allId = action.posts.allId;
      return newState;
    case EDIT_POST:
      newState.byId[action.post.id] = action.post;
      return newState;
    case RECEIVE_USER:
      // return merge(newState, action.payload.posts);
      // when loading a user profile, only store their posts in the post slice of state, news feed fetches new posts anyways
      newState.byId = action.payload.posts.byId || {};
      newState.allId = action.payload.posts.allId;
      return newState;
    case REMOVE_POST:
      delete newState.byId[action.post.id];
      postIndex = newState.allId.indexOf(action.post.id);
      newState.allId = newState.allId.slice(0, postIndex).concat(newState.allId.slice(postIndex +1));
      return newState;
    case RECEIVE_COMMENT:
      newState.byId[action.comment.post_id].comment_id.push(action.comment.id)
      return newState;
    case REMOVE_COMMENT:
      let commentId = newState.byId[action.comment.post_id].comment_id;
      console.log(commentId);
      let commentIndex = newState.byId[action.comment.post_id].comment_id.indexOf(action.comment.id);
      console.log(commentIndex);
      newState.byId[action.comment.post_id].comment_id = commentId.slice(0, commentIndex).concat(commentId.slice(commentIndex + 1));
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
