import React from 'react';
import UserProfileInfo from './user_profile_info';


class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // FETCH USER PROFILE
  }

  render() {
    const {user} = this.props;
    const userImg = user.profile_img_url ? user.profile_img_url : '/assets/default-user.jpg';
    return (
      <div className="user-profile-container">
        <img src={userImg} style={{height: "100px", width: "100px"}} />
        <h1>{user.first_name} {user.last_name}</h1>
        <UserProfileInfo user={user} />
      </div>
    )
  }
}


export default UserProfile;
