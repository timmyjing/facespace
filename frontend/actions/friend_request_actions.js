import *  as FriendRequestApiUtil from '../util/friend_request_api_util.js';

export const RECEIVE_FRIEND_REQUESTS = 'RECEIVE_FRIEND_REQUESTS';

export const SEND_FRIEND_REQUEST = 'SEND_FRIEND_REQUEST';

export const ACCEPT_FRIEND_REQUEST = 'ACCEPT_FRIEND_REQUEST';

export const DECLINE_FRIEND_REQUEST = 'DECLINE_FRIEND_REQUEST';

export const createFriendRequest = requestee_id => dispatch => (
  FriendRequestApiUtil.createFriendRequest({requestee_id}).then(request => dispatch(sendFriendRequest(request)))
);

export const sendFriendRequest = request => ({
  type: SEND_FRIEND_REQUEST,
  request
});

export const acceptedRequest = request => ({
  type: ACCEPT_FRIEND_REQUEST,
  request
});

export const declineRequest = request => ({
  type: DECLINE_FRIEND_REQUEST,
  request
});


export const acceptFriendRequest = id => dispatch => (
  FriendRequestApiUtil.updateFriendRequest(id).then( request => dispatch(acceptedRequest(request)))
);

export const declineFriendRequest = id => dispatch => (
  FriendRequestApiUtil.deleteFriendRequest(id).then( request => dispatch(declineRequest(request)))
);


export const fetchFriendRequests = () => dispatch => (
  FriendRequestApiUtil.fetchFriendRequests().then( payload => dispatch(receiveFriendRequests(payload)))
);

export const receiveFriendRequests = ({users, requests}) => ({
    type: RECEIVE_FRIEND_REQUESTS,
    users,
    requests
});
