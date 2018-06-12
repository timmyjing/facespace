import UserImageThumb from '../image/user_image_thumb';
import React from 'react';
import {Link} from 'react-router-dom';


const UserIndexItem = ({user}) => (
  <Link to={`/users/${user.id}`}>
    <li className="user-search-item">
        <UserImageThumb className="user-thumb" img={user.profile_img_url}/>
        <span className="user-search-name">{user.first_name} {user.last_name}</span>
    </li>
  </Link>
);

export default UserIndexItem;
