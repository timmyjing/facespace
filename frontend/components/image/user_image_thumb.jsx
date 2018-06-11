import React from 'react';


const UserImageThumb = ({img, className}) => {
  let imgUrl;

  imgUrl = (img !== null) ? img : '/assets/default-user.jpg';

  return (<img className={className} src={imgUrl} />);
};

export default UserImageThumb;
