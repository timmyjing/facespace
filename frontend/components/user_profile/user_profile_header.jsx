import React from 'react';
import Button from '../button/button';
import { HashLink } from 'react-router-hash-link'


const UserProfileHeader = ({deleteFriend, user, createFriendRequest, updateFriendRequest, currentUser, outgoingUserId, incomingUserId, handlePhoto, openEditModal}) => (
  <div className="user-profile-header">

    <div className="user-cover-photo profiletooltip">
      {currentUser.id === user.id ? <div class="covertooltiptext" onClick={ () => document.getElementById('cover-photo-input').click()}><div><i className="profile-i-camera"/></div><div>Update Cover Photo</div></div> : null }
      { user.cover_img_url !== null ? (<img src={user.cover_img_url} />) :
      (<div className="user-no-cover" ></div>) }
    </div>

    <div className="user-profile-image-container">
      <div className='div-image user-profile-image profiletooltip' title={`${user.first_name} ${user.last_name}` === 'Aaron Wayne' ? 'Wayne Train' : `${user.first_name} ${user.last_name}`}
        style={{backgroundImage: `url(${user.profile_img_url})`}}>
        {currentUser.id === user.id ? <div class="profiletooltiptext" onClick={ () => document.getElementById('profile-image-input').click()}><div><i className="profile-i-camera"/></div><div style={{width: '100px'}}>Update Profile Picture</div></div> : null }
      </div>
    </div>

    <div className="user-profile-name">
      <h1>{user.first_name} {user.last_name}</h1>
    </div>

    <div className="user-profile-buttons">
      { currentUser.id !== user.id ?
        ( user.friendship === null   ?
        (outgoingUserId.indexOf(user.id) === -1 && incomingUserId.indexOf(user.id) === -1 ?
          <Button onClick={() => createFriendRequest(user.id)} label={'\ufe62 Add Friend'}/> :
          <Button label={"Pending"} />) : <button onClick={() => deleteFriend(user.friendship.id)} className='grey-button friended-button'>{'\u2714 Friends'}</button> ):
        <Button label={"Edit Info"} onClick={openEditModal} />
      }
      { currentUser.id !== user.id? <Button label={"Send Message"} /> : <Button label={"View Activity Log"} />}
    </div>

      <ul className="user-profile-tabs">
        <li><HashLink to="#user-timeline">Timeline</HashLink></li>
        <li><HashLink to="#user-info">About</HashLink></li>
        <li><HashLink to="#user-friends">Friends</HashLink></li>
        <li><a>Photos</a></li>
        <li><a>More</a></li>
      </ul>

  </div>
);

export default UserProfileHeader;
