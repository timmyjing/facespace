import React from 'react';


const UserImageSquare = ({img}) => {
  let imgUrl;

  imgUrl = (img !== null) ? img : '/assets/default-user.jpg';

  return (<div className='div-image user-square' style={{backgroundImage: `url(${imgUrl})`}}></div>);
};

export default UserImageSquare;
