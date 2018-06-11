import * as UserApiUtil from '../util/user_api_util';



export const RECEIVE_USERS = 'RECEIVE_USERS';

export const RECEIVE_USER = 'RECEIVE_USER';

export const RECEIVE_SEARCHED_USERS = 'RECEIVE_SEARCHED_USERS';

export const CLEAR_SEARCHED_USERS = 'CLEAR_SEARCHED_USERS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

// not sure if this is necessary now...will refactor later
export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const receiveSearchedUsers = users => ({
  type: RECEIVE_SEARCHED_USERS,
  users
});

export const clearSearchedUsers = () => ({
  type: CLEAR_SEARCHED_USERS
});

export const requestUsers = () => dispatch => (
  UserApiUtil.requestUsers()
    .then(users => dispatch(receiveUsers(users),
    errors => console.log(errors.responseJSON)))
);

// HAD TO CHANGE RECEIVEUSER TO RECEIVEUSERS AS FRIENDS NEED TO BE IN USER SLICE OF STATE
export const requestUser = id => dispatch => (
  UserApiUtil.requestUser(id)
    .then(payload => dispatch(receiveUser(payload)), errors =>
    console.log(errors.responseJSON))
);

export const searchUsers = query => dispatch => (
  UserApiUtil.searchUsers(query)
    .then(payload => {
      if (payload.allId.length === 0) dispatch(clearSearchedUsers())
      else {
        dispatch(receiveSearchedUsers(payload));
      };
    },
    errors => dispatch(clearSearchedUsers()))
);
