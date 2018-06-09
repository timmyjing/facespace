import React from 'react';
import UserProfileInfo from './user_profile_info';


class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // FETCH USER PROFILE
    this.props.requestUser(this.props.match.params.userId);
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.requestUser(this.props.match.params.userId);
    }
  }

  render() {
    const {user, updateFriendRequest, createFriendRequest } = this.props;
    if (!user) return (<div />);
    user.profile_img_url = user.profile_img_url ? user.profile_img_url : '/assets/default-user.jpg';
    return (
      <div className="user-profile-container">
        <UserProfileInfo user={user} updateFriendRequest={updateFriendRequest} createFriendRequest={createFriendRequest} />
      </div>
    );
  }
}


export default UserProfile;
