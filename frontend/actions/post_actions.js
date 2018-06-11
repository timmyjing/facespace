import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST'


export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)), errors => console.log(errors))
);
