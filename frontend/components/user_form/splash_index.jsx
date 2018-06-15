import React from 'react';
import CreateUserContainer from './create_user_container';


const SplashIndex = ({demoLogin}) => (
  <div className="splash-index">
    <div className="strong-text important-text" style={{marginBottom: '10px',fontSize: '28px', lineHeight: '32px', letterSpacing: "0.15px"}}>Connect with friends and the world around you on Facespace.</div>
    <div className="splash-header" ><i className="splash-i-news"></i><span className="splash-bold">See photos and updates</span> from friends in News Feed.</div>
    <div className="splash-header" ><i className="splash-i-timeline"></i><span className="splash-bold">Share what's new</span> in your life on your Timeline.</div>
    <div className="splash-header" ><i className="splash-i-share"></i><span className="splash-bold">Find more</span> of what you're looking for with Facespace Search.</div>
    <div><button className="demo-login" onClick={demoLogin}>Demo Login</button></div>
  </div>
);


export default SplashIndex;
