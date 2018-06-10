import React from 'react';
import Button from '../button/button';


const UserProfileHeader = ({user, createFriendRequest, updateFriendRequest, session}) => (
  <div className="user-profile-header">
    <div className="user-cover-photo">
      { user.cover_img_url !== null ? (<img src={user.cover_img_url} />) :
      (<div className="user-no-cover"></div>) }
    </div>
    <div className="user-profile-image-container">
      <img src={user.profile_img_url} className="user-profile-image" />
    </div>
    <div className="user-profile-name">
      <h1>{user.first_name} {user.last_name}</h1>
    </div>
    <div className="user-profile-buttons">
      { session !== user.id ? <Button onClick={() => createFriendRequest(user.id)} label={"Add Friend"}/> :
      <Button label={"Edit Info"}/>}
    </div>
    <div className="user-profile-tabs"></div>
  </div>
);

export default UserProfileHeader;
