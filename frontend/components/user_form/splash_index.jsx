import React from 'react';
import CreateUserContainer from './create_user_container';


const SplashIndex = ({demoLogin}) => (
  <div className="splash-index">
    <div className="strong-text important-text" style={{fontSize: '28px', letterSpacing: "0.15px"}}>Connect with friends and the world around you on Facespace.</div>
    <div><span className="strong-text">See photos and updates</span> from friends in News Feed.</div>
    <div><span className="strong-text">Share what's new</span> in your life on your Timeline.</div>
    <div><span className="strong-text">Find more</span> of what you're looking for with Facespace Search.</div>
    <div><button className="demo-login" onClick={demoLogin}>Demo Login</button></div>
  </div>
);


export default SplashIndex;
