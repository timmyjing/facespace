import React from 'react';
import {Link} from 'react-router-dom';
import UserImageThumb from '../image/user_image_thumb';
import SearchContainer from '../search/search_container';
import FriendRequestsContainer from '../friend_request/friend_requests_container';
const Header = ({user, logout}) => (
  <div className="home-header">
    <div className="header-left">
      <Link to="/" ><div id="fb-logo"><p>f</p></div></Link>
      <SearchContainer />
    </div>
    <div className="header-right">

        <Link className="header-current-user-link tab-hover" to={`/users/${user.id}`}>
            <div><UserImageThumb className="user-thumb" img={user.profile_img_url} /></div>
            <div>{user.first_name}</div>
        </Link>

      <div className="header-home-tab tab-hover "><Link to='/'>Home</Link></div>
        <div className="dropdown header-tab tab-hover"><i className="icon-friends" /><FriendRequestsContainer  /></div>
        <div className="header-tab tab-hover"><i className="icon-messages" /></div>
        <div className="header-tab tab-hover"><i className="icon-notifications" /></div>
        <div className="header-tab tab-hover"><i className="icon-info" /></div>
      <div className="header-tab tab-hover">
        <button onClick={() => logout()}><i className='icon-logout' /></button>
      </div>
    </div>
  </div>
);


export default Header;
