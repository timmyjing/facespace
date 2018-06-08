import React from 'react';

const UserProfileInfo = ({user}) => (
  <div className="user-profile-info">
    <h2>{user.first_name} {user.last_name}</h2>
    <h3>STALK ME: {user.location}</h3>
    <p>ABOUT ME: {user.bio}</p>
  </div>
);

export default UserProfileInfo;
