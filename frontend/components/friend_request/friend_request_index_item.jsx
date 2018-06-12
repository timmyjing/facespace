import React from 'react';
import Button from '../button/button';
import UserImageSquare from '../image/user_image_square';

const FriendRequestIndexItem = ({requester, accept, decline}) => (
  <li className="dropdown-item">
    <UserImageSquare img={requester.profile_img_url} />
    <p>{requester.first_name} {requester.last_name} wants to be friends!</p>
    <Button onClick={accept} label={"Accept"}/>
    <Button onClick={decline} label={"Decline"}/>
  </li>
);


export default FriendRequestIndexItem;
