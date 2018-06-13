import React from 'react';
import FriendRequestIndexItem from './friend_request_index_item';

const FriendRequestIndex = ({users, requests, accept, decline}) => {
  const requestItems = requests.map( request => {
    const requester = users[request.requester_id];
    return (<FriendRequestIndexItem key={request.id} requester={requester} accept={() => accept(request.id)} decline={() => decline(request.id)} />);
  });

  return (<ul className="header-tab-dropdown dropdown-content">
            <li className="friend-requests-header">
              <span className="friend-requests-label">Friend Requests</span>  <span className="friend-requests-links"><span>Find Friends</span> {'\u00b7'} <span>Settings</span></span>
            </li>
            {requestItems.length > 0 ? requestItems : <li className="friend-requests-none dropdown-item">No Friend Requests</li>}
          </ul>);
};



export default FriendRequestIndex;
