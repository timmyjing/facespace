import React from 'react';


const UserProfileDetail = ({user}) => (
  <div id="user-info" className="user-profile-info profile-container">
    <h2>Intro</h2>
    <hr />
    {user.location ? <p>Lives in: {user.location}</p> : null }
    {user.gender ? <p>Gender: {user.gender}</p> : null }
    {user.birth_date ? <p>Birthday: {user.birth_date}</p> : null }
    {user.bio ? <p>About me: {user.bio}</p> : null }
  </div>
);

export default UserProfileDetail;
