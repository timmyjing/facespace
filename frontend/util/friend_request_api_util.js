export const createFriendRequest = request => (
  $.ajax({
    url: 'api/friend_requests/',
    method: 'POST',
    data: { request }
  })
);

export const updateFriendRequest = id => (
  $.ajax({
    url: `api/friend_requests/${id}`,
    method: 'PATCH'
  })
);

export const deleteFriendRequest = id => (
  $.ajax({
    url: `api/friend_requests/${id}`,
    method: 'DELETE'
  })
);


export const fetchFriendRequests = () => (
  $.ajax({
    url: `api/friend_requests`,
    method: 'GET'
  })
);
