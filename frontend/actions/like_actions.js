import * as LikeApiUtil from '../util/like_api_util';


export const RECEIVE_LIKE = 'SWEET!';

export const REMOVE_LIKE = 'NOT_COOL';

export const createLike = like => dispatch => (
  LikeApiUtil.createLike(like).then( like => dispatch(receiveLike(like)),
    errors => console.log(errors))
);

export const deleteLike = id => dispatch => (
  LikeApiUtil.deleteLike(id).then( like => dispatch(removeLike(like)),
    errors => console.log(errors))
);

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});
