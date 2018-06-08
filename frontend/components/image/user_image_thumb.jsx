import React from 'react';


const UserImageThumb = ({img}) => {
  let imgUrl;

  imgUrl = (img !== null) ? img : '/assets/default-user.jpg';

  return (<img className="user-thumb" src={imgUrl} />);
};

export default UserImageThumb;
