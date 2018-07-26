import {RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST, EDIT_POST} from '../actions/post_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_LIKE, REMOVE_LIKE} from '../actions/like_actions';
import merge from 'lodash/merge';

const defaultState = {
  byId: {},
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
      // if (!action.payload.view_content) return defaultState;
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
      let commentIndex = newState.byId[action.comment.post_id].comment_id.indexOf(action.comment.id);
      newState.byId[action.comment.post_id].comment_id = commentId.slice(0, commentIndex).concat(commentId.slice(commentIndex + 1));
      return newState;
    case RECEIVE_LIKE:
      newState.byId[action.like.liked_id].like_id.push(action.like.id);
      newState.byId[action.like.liked_id].liked = action.like;
      return newState;
    case REMOVE_LIKE:
      let likeIndex = newState.byId[action.like.liked_id].like_id.indexOf(action.like.id);
      let likedId = newState.byId[action.like.liked_id].like_id;
      newState.byId[action.like.liked_id].like_id = likedId.slice(0, likeIndex).concat(likedId.slice(likeIndex + 1));
      newState.byId[action.like.liked_id].liked = undefined;
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
