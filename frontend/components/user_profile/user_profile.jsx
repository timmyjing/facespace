import React from 'react';
import UserProfileHeader from './user_profile_header';
import UserProfileDetail from './user_profile_detail'
import UserProfileFriendsContainer from './user_profile_friends_container';
import CreatePostFormContainer from '../post/create_post_form_container';
import PostIndexContainer from '../post/post_index_container';
import {Redirect} from 'react-router-dom';


class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };

    this.requestUser = this.requestUser.bind(this);
  }

  componentDidMount() {
    // FETCH USER PROFILE
    this.props.requestUser(this.props.match.params.userId).then( () => this.setState({loading: false}),
    () => this.props.history.push('/'));
  }

  requestUser() {
    this.props.requestUser(this.props.match.params.userId).then( () => this.setState({loading: false}) );
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.setState({loading: true}, this.requestUser);
      // since state wasnt set back to loading, the render logic was proceeded with before some user info was loaded
      // this.requestUser(this.props.match.params.userId).then(() => this.setState({loading: false}));
    }
  }

  componentWillUnmount() {
    console.log(this.props);
    if (this.props.history.action === 'REPLACE') this.props.history.push(this.props.match.url);
  }

  render() {
    const {user, updateFriendRequest, createFriendRequest , users, currentUser, friendRequests} = this.props;
    if (this.state.loading) return null;
    if (!user || !user.friends_id) return null;
    const friends = user.friends_id.slice(0,9).map( id => users[id]);
    user.profile_img_url = user.profile_img_url ? user.profile_img_url : '/assets/default-user.jpg';
    return (
      <div className="user-profile-container">
        <UserProfileHeader currentUser={currentUser} user={user} updateFriendRequest={updateFriendRequest}
          outgoingUserId={friendRequests.outgoingUserId} createFriendRequest={createFriendRequest}
          incomingUserId={friendRequests.incomingUserId} />
        <UserProfileFriendsContainer friends={friends} />

        <UserProfileDetail user={user} />
        { currentUser.friends_id.indexOf(user.id) !== -1 || currentUser.id === user.id ? (
          <div>
            <CreatePostFormContainer className={"post-form-profile"} user={user} />
            <PostIndexContainer />
          </div>
        ) : null}
      </div>
    );
  }
}


export default UserProfile;
