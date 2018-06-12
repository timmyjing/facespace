import React from 'react';
import UserImageThumb from '../image/user_image_thumb';

const SideNavBar = ({currentUser}) => (
  <ul className="side-nav-bar">
    <li>
        <UserImageThumb className="tiny-nav-image" img={currentUser.profile_img_url} />
        <span>{currentUser.first_name} {currentUser.last_name}</span>
    </li>
    <li>News Feed</li>
    <li>Messenger</li>
    <li>Watch</li>
    <li>Marketplace</li>
    <li>Events</li>
  </ul>
);


export default SideNavBar;
