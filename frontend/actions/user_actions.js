import * as UserApiUtil from '../util/user_api_util';



export const RECEIVE_USERS = 'RECEIVE_USERS';

export const RECEIVE_USER = 'RECEIVE_USER';

export const RECEIVE_SEARCHED_USERS = 'RECEIVE_SEARCHED_USERS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveSearchedUsers = users => ({
  type: RECEIVE_SEARCHED_USERS,
  users
})

export const requestUsers = () => dispatch => (
  UserApiUtil.requestUsers().then(users => dispatch(receiveUsers(users), errors => console.log(errors.responseJSON)))
);

export const requestUser = id => dispatch => (
  UserApiUtil.requestUser(id).then(user => dispatch(receiveUser(user)), errors => console.log(errors.responseJSON))
);


export const searchUsers = query => dispatch => (
  UserApiUtil.searchUsers(query).then(users => dispatch(receiveSearchedUsers(users)), errors => console.log(errors.responseJSON))
);
