import *  as FriendRequestApiUtil from '../util/friend_request_api_util.js';

export const RECEIVE_FRIEND_REQUESTS = 'RECEIVE_FRIEND_REQUESTS';

export const SEND_FRIEND_REQUEST = 'SEND_FRIEND_REQUEST';

export const ACCEPT_FRIEND_REQUEST = 'ACCEPT_FRIEND_REQUEST';

export const DECLINE_FRIEND_REQUEST = 'DECLINE_FRIEND_REQUEST';

export const createFriendRequest = requestee_id => dispatch => (
  FriendRequestApiUtil.createFriendRequest({requestee_id}).then( () => console.log("hi"))
);

export const sendFriendRequest = () => ({
  type: 'SEND_FRIEND_REQUEST'
});


export const acceptFriendRequest = id => dispatch => (
  FriendRequestApiUtil.updateFriendRequest(id).then( () => console.log("hi"))
);

export const declineFriendRequest = id => dispatch => (
  FriendRequestApiUtil.deleteFriendRequest(id)
);
