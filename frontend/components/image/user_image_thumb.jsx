import React from 'react';


const UserImageThumb = ({img, className}) => {
  let imgUrl;

  imgUrl = (img !== null) ? img : '/assets/default-user.jpg';

  return (<div className={`div-image ${className}`} style={{backgroundImage: `url(${imgUrl})`}}></div>);
};

export default UserImageThumb;
