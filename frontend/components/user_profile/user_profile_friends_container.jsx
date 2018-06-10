import React from 'react';
import FriendListItem from './friend_list_item';

const UserProfileFriendsContainer = ({friends}) => (
  <div className="friend-list-container profile-container">
    <div className="friend-list-header"><span className="friends-bold">Friends </span> {friends.length}</div>
    {friends.slice(0,9).map( friend => <FriendListItem friend={friend} />)}
  </div>
);

export default UserProfileFriendsContainer;
