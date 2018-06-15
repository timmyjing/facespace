import React from 'react';
import {Link} from 'react-router-dom';

const FriendListItem = ({friend}) => {
  if (friend === undefined) return null;
  const imgUrl = friend.profile_img_url || '/assets/user.png';
  return (
    <Link to={`/users/${friend.id}`} title={`${friend.first_name} ${friend.last_name}`}>
        <div className="friend-list-item">
          <div className='div-image friend-list-image' style={{backgroundImage: `url(${imgUrl})`}}></div>
        </div>
      <div className="friend-list-item-name">
        {friend.first_name} {friend.last_name}
      </div>
    </Link>);
};

export default FriendListItem;
