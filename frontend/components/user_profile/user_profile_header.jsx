import React from 'react';
import Button from '../button/button';


const UserProfileHeader = ({user, createFriendRequest, updateFriendRequest, currentUser, outgoingUserId, incomingUserId}) => (
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
      { currentUser.id !== user.id ?
        (currentUser.friends_id.indexOf(user.id) === -1 ?

        (outgoingUserId.indexOf(user.id) === -1 && incomingUserId.indexOf(user.id) === -1 ?
          <Button onClick={() => createFriendRequest(user.id)} label={'\ufe62 Add Friend'}/> :
          <Button label={"Pending"} />) : <Button label={'\u2714 Friends'} />) :
        <Button label={"Edit Info"} />
      }
      { currentUser.id !== user.id? <Button label={"Send Message"} /> : <Button label={"View Activity Log"} />}
    </div>

      <ul className="user-profile-tabs">
        <li><a>Timeline</a></li>
        <li><a>About</a></li>
        <li><a>Friends</a></li>
        <li><a>Photos</a></li>
        <li><a>More</a></li>
      </ul>

  </div>
);

export default UserProfileHeader;
