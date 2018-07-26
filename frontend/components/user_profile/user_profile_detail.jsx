import React from 'react';


const UserProfileDetail = ({user}) => (
  <div id="user-info" className="user-profile-info profile-container">
    <div className="detail-row">
      <i className="detail-i-earth" />
      <h2>Intro</h2>
    </div>
    {user.bio ? <p>{user.bio}</p> : null }
    <hr />
    {user.location ? 
      <div className="detail-row">
        <i className="detail-i-house" />
        <p> Lives in: {user.location}</p>
      </div> : null }
    {user.gender ? 
      <div className="detail-row">
        <i className="detail-i-gender" />
        <p>Gender: {user.gender}</p>
      </div>: null }
    {user.birth_date ? 
      <div className="detail-row">
        <i className="detail-i-birthday" />
        <p> Birthday: {user.birth_date}</p>
      </div>: null }
  </div>
);

export default UserProfileDetail;
