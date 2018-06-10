import React from 'react';


const UserProfileDetail = ({user}) => (
  <div className="user-profile-info profile-container">
    <h2>Intro</h2>
    <hr />
    <p>Lives in: {user.location}</p>
    <p>Gender: {user.gender}</p>
    <p>Birthday: {user.birth_date}</p>
    <p>Bio: {user.bio}</p>
  </div>
);

export default UserProfileDetail;
