import React from 'react';
import Button from '../button/button';
import UserImageSquare from '../image/user_image_square';
import {Link} from 'react-router-dom';

const FriendRequestIndexItem = ({requester, accept, decline}) => (
  <li className="dropdown-item">
    <UserImageSquare img={requester.profile_img_url} title={`${requester.first_name} ${requester.last_name}`}/>
    <p><Link className='friend-request-name-tag' to={`/users/${requester.id}`}>{requester.first_name} {requester.last_name}</Link> wants to be friends!</p>
    <div>
      <Button onClick={accept} label={"Accept"}/>
      <Button onClick={decline} label={"Decline"}/>
    </div>
  </li>
);


export default FriendRequestIndexItem;
