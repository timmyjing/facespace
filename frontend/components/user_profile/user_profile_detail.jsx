import React from 'react';


const UserProfileDetail = ({user}) => (
  <div className="user-profile-info profile-container">
    <h2>Intro</h2>
    <hr />
    {user.location ? <p>Lives in: {user.location}</p> : null }
    {user.gender ? <p>Gender: {user.gender.toUpperCase().slice(0,1) + user.gender.slice(1)}</p> : null }
    {user.birth_date ? <p>Birthday: {user.birth_date.split("-").reverse().join("/")}</p> : null }
    {user.bio ? <p>About me: {user.bio}</p> : null }
  </div>
);

export default UserProfileDetail;
