import React from 'react';


const UserImageSquare = ({img}) => {
  let imgUrl;

  imgUrl = (img !== null) ? img : '/assets/default-user.jpg';

  return (<img className="user-square" src={imgUrl} />);
};

export default UserImageSquare;
