import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'SWEET_AWESOME!';

export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const RECEIVE_UPDATE = 'RECEIVE_UPDATE';

export const createComment = comment => dispatch => (
  CommentApiUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveCommentError(errors.responseJSON)))
);

export const deleteComment = id => dispatch => (
  CommentApiUtil.deleteComment(id).then(comment => dispatch(removeComment(comment)),
    errors => dispatch(receiveCommentError(errors.responseJSON)))
);

export const updateComment = comment => dispatch => (
  CommentApiUtil.updateComment(comment).then(comment => dispatch(receiveUpdate(comment))),
    errors => dispatch(receiveCommentError(error.responseJSON))
);

export const receiveUpdate = comment => ({
  type: RECEIVE_UPDATE,
  comment
})
export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

