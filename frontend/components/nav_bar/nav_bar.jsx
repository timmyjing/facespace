import React from 'react';
import UserImageThumb from '../image/user_image_thumb';

const SideNavBar = ({currentUser}) => (
  <ul className="side-nav-bar">
    <li>
        <UserImageThumb className="tiny-nav-image" img={currentUser.profile_img_url} />
        <span>{currentUser.first_name} {currentUser.last_name}</span>
    </li>
    <li><i className="nav-i-news" />News Feed</li>
    <li><i className="nav-i-messages" />Messenger</li>
    <li><i className="nav-i-watch" />Watch</li>
    <li><i className="nav-i-marketplace" />Marketplace</li>
    <li><i className="nav-i-events" />Events</li>
  </ul>
);


export default SideNavBar;
