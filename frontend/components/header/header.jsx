import React from 'react';
import {Link} from 'react-router-dom';
import UserImageThumb from '../image/user_image_thumb';
import SearchContainer from '../search/search_container';

const Header = ({user, logout}) => (
  <div className="home-header flex-container">
    <div className="header-left">
      <div id="fb-logo"><p>f</p></div>
      <SearchContainer />
    </div>
    <div className="header-right">
      <div className="current-user-homepage">
        <Link to={`/users/${user.id}`}>
          <div className="header-current-user-link">
            <div><UserImageThumb img={user.profile_img_url} /></div>
            <div>{user.first_name}</div>
          </div>
        </Link>
      </div>
      <div className="header-tab"><Link to='/'>Home</Link></div>
      <div className="header-tab">Friend</div>
      <div className="header-tab">Messages</div>
      <div className="header-tab">Notifications</div>
      <div className="header-tab">
        <button onClick={() => logout()}>Log Out</button>
      </div>
    </div>
  </div>
);


export default Header;
