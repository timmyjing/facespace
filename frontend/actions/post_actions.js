import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});


export const receivePosts = ({users, posts}) => ({
  type: RECEIVE_POSTS,
  posts,
  users
});

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)), errors => console.log(errors))
);


export const requestPosts = () => dispatch => (
  PostApiUtil.requestPosts().then(payload => dispatch(receivePosts(payload)), errors => console.log(errors))
);
