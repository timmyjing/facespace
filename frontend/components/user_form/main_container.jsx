import SplashContainer from './splash_container';
import React from 'react';
import CreateUserContainer from './create_user_container';

const MainContainer = () => (
  <div className="main-container flex-container">
    <SplashContainer />
    <CreateUserContainer />
  </div>
);


export default MainContainer;
