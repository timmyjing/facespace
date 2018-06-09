import React from 'react';
import Button from '../button/button';

const FriendRequestIndexItem = ({requester, accept, decline}) => (
  <li className="dropdown-item">
    <p>{requester.first_name} {requester.last_name} wants to be friends!</p>
    <Button onClick={accept} label={"Accept"}/>
    <Button onClick={decline} label={"Decline"}/>
  </li>
);


export default FriendRequestIndexItem;
