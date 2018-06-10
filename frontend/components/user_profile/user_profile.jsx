import React from 'react';
import UserProfileHeader from './user_profile_header';
import UserProfileDetail from './user_profile_detail'
import UserProfileFriendsContainer from './user_profile_friends_container';


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
    const {user, updateFriendRequest, createFriendRequest , session, users} = this.props;
    if (!user || !user.friends_id) return null;
    const friends = user.friends_id.map( id => users[id]);
    user.profile_img_url = user.profile_img_url ? user.profile_img_url : '/assets/default-user.jpg';
    return (
      <div className="user-profile-container">
        <UserProfileHeader session={session} user={user} updateFriendRequest={updateFriendRequest} createFriendRequest={createFriendRequest} />
        <UserProfileDetail user={user} />
        <UserProfileFriendsContainer friends={friends} />
      </div>
    );
  }
}


export default UserProfile;
