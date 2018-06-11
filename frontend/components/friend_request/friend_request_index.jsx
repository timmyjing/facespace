import React from 'react';
import FriendRequestIndexItem from './friend_request_index_item';

const FriendRequestIndex = ({users, requests, accept, decline}) => {
  const requestItems = requests.map( request => {
    const requester = users[request.requester_id];
    return (<FriendRequestIndexItem key={request.id} requester={requester} accept={() => accept(request.id)} decline={() => decline(request.id)} />);
  });

  return (<ul className="header-tab-dropdown"> {requestItems} </ul>);
};



export default FriendRequestIndex;
