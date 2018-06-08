import UserIndexItem from './user_index_item';
import React from 'react';

const UserIndex = ({users}) => (
  <ul className="search-index">
    {users.map(user => <UserIndexItem user={user}/> )}
  </ul>
);

export default UserIndex;
