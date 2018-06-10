import React from 'react';
import {Link} from 'react-router-dom';

const FriendListItem = ({friend}) => (
  <Link to={`/users/${friend.id}`}>
    <div className="friend-list-item">
      <img className="friend-list-image" src={friend.profile_img_url || '/assets/default-user.jpg'} />
    </div>
    <div className="friend-list-item-name">
      {friend.first_name} {friend.last_name}
    </div>
  </Link>
);

export default FriendListItem;
