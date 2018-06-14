import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const REMOVE_POST = 'REMOVE_POST';

export const EDIT_POST = 'EDIT_POST';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});


export const receivePosts = ({users, posts, comments, likes}) => ({
  type: RECEIVE_POSTS,
  posts,
  users,
  comments,
  likes
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});

export const editPost = post => ({
  type: EDIT_POST,
  post
});

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)), errors => console.log(errors))
);


export const requestPosts = () => dispatch => (
  PostApiUtil.requestPosts().then(payload => dispatch(receivePosts(payload)), errors => console.log(errors))
);


export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post).then(post => dispatch(editPost(post)), errors => console.log(errors))
);

export const deletePost = id => dispatch => (
  PostApiUtil.deletePost(id).then(post => dispatch(removePost(post)), errors => console.log(errors))
);
