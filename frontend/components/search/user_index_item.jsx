import UserImageThumb from '../image/user_image_thumb';
import React from 'react';
import {Link} from 'react-router-dom';


const UserIndexItem = ({user}) => (
  <Link to={`/users/${user.id}`}>
    <li className="user-search-item">
      <div>
        <UserImageThumb img={user.profile_img_url}/>
      </div>
      <div>
        {user.first_name} {user.last_name}
      </div>
      <div>
        ADD ME
      </div>
    </li>
  </Link>
);

export default UserIndexItem;
