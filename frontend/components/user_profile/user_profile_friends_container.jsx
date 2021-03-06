import React from 'react';
import FriendListItem from './friend_list_item';

const UserProfileFriendsContainer = ({friends, numFriends}) => (
  <div id="user-friends" className="friend-list-container profile-container">
    <div className="friend-list-header"><i className="detail-i-friends" /><span className="friends-bold">Friends</span> {'\u00B7'} {numFriends} <span className="find-friends">Find Friends</span></div>
    <div className="friend-list-flex">
      {friends.slice(0,9).map( friend => <FriendListItem friend={friend} />)}
    </div>
  </div>
);

export default UserProfileFriendsContainer;
