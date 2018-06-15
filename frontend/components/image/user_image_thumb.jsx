import React from 'react';


const UserImageThumb = ({img, className}) => {
  let imgUrl;

  imgUrl = (img !== null) ? img : '/assets/user.png';

  return (<div className={`div-image ${className}`} style={{backgroundImage: `url(${imgUrl})`}}></div>);
};

export default UserImageThumb;
