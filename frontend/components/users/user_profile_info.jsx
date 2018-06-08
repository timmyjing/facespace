import React from 'react';
import Button from '../button/button';


const UserProfileInfo = ({user, createFriendRequest, updateFriendRequest}) => (
  <div className="user-profile-info">
    <img src={user.profile_img_url} className="user-profile-image user-profile-image-border" />
    <h1>{user.first_name} {user.last_name}</h1>
    <h3>STALK ME, IM HERE: {user.location}</h3>
    <p>ABOUT ME: {user.bio}</p>
    <button onClick={() => createFriendRequest(user.id)}>ADD FRIEND</button>
    <button onClick={updateFriendRequest}>UPDATE REQUEST</button>

  </div>
);

export default UserProfileInfo;
