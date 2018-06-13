import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_POSTS} from '../actions/post_actions';
import merge from 'lodash/merge';

const defaultState = {byId: {}, allId: []};

const commentsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_COMMENT:
      newState.byId[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState.byId[action.comment.id];
      return newState;
    case RECEIVE_POSTS:
      newState.byId = action.comments.byId;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
