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
      loading: true,
      profileImage: null,
      coverImage: null,
      info: null
    };
    this.requestUser = this.requestUser.bind(this);
    this.handleProfileImageUpload = this.handleProfileImageUpload.bind(this);
    this.handleCoverImageUpload = this.handleCoverImageUpload.bind(this);
    this.photoInput = React.createRef();
    this.coverInput = React.createRef();
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    if (this.props.history.action === 'REPLACE') this.props.history.replace(this.props.match.url);
    this.requestUser();
  }

  requestUser() {
    this.props.requestUser(this.props.match.params.userId)
      .then( () => this.setState({loading: false}), errors => this.props.history.goBack());
  }


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId && !this.state.loading) {
      this.setState({loading: true}, this.requestUser);
      // since state wasnt set back to loading, the render logic was proceeded with before some user info was loaded
      // this.requestUser(this.props.match.params.userId).then(() => this.setState({loading: false}));
    }
  }

  handleProfileImageUpload(e) {
    this.setState({profileImage: this.photoInput.current.files[0]}, this.updateUser);
  }

  handleCoverImageUpload(e) {
    console.log(e);
    this.setState({coverImage: this.coverInput.current.files[0]}, this.updateUser);
  }

  updateUser() {
    console.log('hi');
    const {info, profileImage, coverImage} = this.state;
    const {currentUser} = this.props;
    const formData = new FormData();
    const updateCurrentUser = this.props.updateUser(currentUser.id);
    console.log(coverImage);
    if (info) formData.append('info', info);
    if (profileImage) formData.append('profile_image', profileImage);
    if (coverImage) formData.append('cover_image', coverImage);
    updateCurrentUser(formData);
    this.setState({info: null, coverImage: null, profileImage: null});
  }

  render() {
    const {deleteFriend, user, updateFriendRequest, createFriendRequest , users, currentUser, friendRequests} = this.props;
    if (this.state.loading || !user || user.friends_id === undefined) return null;
    // check if the user detailed information is loaded, might be a partial
    const numFriends = user.friends_id.length;
    const friends = user.friends_id.slice(0,9).map( id => users[id]);
    user.profile_img_url = user.profile_img_url ? user.profile_img_url : '/assets/default-user.jpg';
    return (
      <div className="user-profile-container">
        <input type="file" id="profile-image-input" className="file-input" multiple={false}  onChange={this.handleProfileImageUpload} ref={this.photoInput} />
        <input type="file" id="cover-photo-input" className="file-input" multiple={false}  onChange={this.handleCoverImageUpload} ref={this.coverInput} />
        <UserProfileHeader currentUser={currentUser} user={user} updateFriendRequest={updateFriendRequest}
          outgoingUserId={friendRequests.outgoingUserId} createFriendRequest={createFriendRequest}
          incomingUserId={friendRequests.incomingUserId} deleteFriend={deleteFriend}/>
        <UserProfileFriendsContainer friends={friends} numFriends={numFriends} />

        <UserProfileDetail user={user} />
        { user.friendship !== null || currentUser.id === user.id ? (
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
