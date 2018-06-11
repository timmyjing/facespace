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

        <Link className="header-current-user-link header-tab" to={`/users/${user.id}`}>
            <div><UserImageThumb className="user-thumb" img={user.profile_img_url} /></div>
            <div>{user.first_name}</div>
        </Link>

      <div className="header-tab"><Link to='/'>Home</Link></div>
      <div className="header-tab">Friends<FriendRequestsContainer  /></div>
      <div className="header-tab">Messages</div>
      <div className="header-tab">Notifications</div>
      <div className="header-tab">
        <button onClick={() => logout()}>Log Out</button>
      </div>
    </div>
  </div>
);


export default Header;
