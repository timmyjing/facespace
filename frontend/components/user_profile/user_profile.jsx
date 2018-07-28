import React from 'react';
import UserProfileHeader from './user_profile_header';
import UserProfileDetail from './user_profile_detail'
import UserProfileFriendsContainer from './user_profile_friends_container';
import CreatePostFormContainer from '../post/create_post_form_container';
import PostIndexContainer from '../post/post_index_container';
import {Redirect} from 'react-router-dom';
import Modal from 'react-modal';
import Input from '../user_form/input';



class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      profileImage: null,
      coverImage: null,
      modalIsOpen: false,
      location: null,
      bio: null,
      gender: null
    };

    this.requestUser = this.requestUser.bind(this);
    this.handleProfileImageUpload = this.handleProfileImageUpload.bind(this);
    this.handleCoverImageUpload = this.handleCoverImageUpload.bind(this);
    this.photoInput = React.createRef();
    this.coverInput = React.createRef();
    this.updateUser = this.updateUser.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.history.action === 'REPLACE') this.props.history.replace(this.props.match.url);
    this.requestUser();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  requestUser() {
    this.props.requestUser(this.props.match.params.userId)
      .then( () => this.setState({loading: false }), errors => this.props.history.goBack());
  }


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.setState({loading: true}, this.requestUser);
      // since state wasnt set back to loading, the render logic was proceeded with before some user info was loaded
      // this.requestUser(this.props.match.params.userId).then(() => this.setState({loading: false}));
    }
  }

  handleProfileImageUpload(e) {
    this.setState({profileImage: this.photoInput.current.files[0]}, this.updateUser);
  }

  handleCoverImageUpload(e) {
    this.setState({coverImage: this.coverInput.current.files[0]}, this.updateUser);
  }

  updateUser() {
    const {bio, location, profileImage, coverImage} = this.state;
    const {currentUser} = this.props;
    const formData = new FormData();
    const updateCurrentUser = this.props.updateUser(currentUser.id);
    if (bio) formData.append('bio', bio);
    if (location) formData.append('location', location);
    if (profileImage) formData.append('profile_image', profileImage);
    if (coverImage) formData.append('cover_image', coverImage);
    updateCurrentUser(formData);
    this.setState({coverImage: null, profileImage: null });
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.closeModal();
    this.updateUser();
  }

  render() {

    const customStyles = {
      content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#edf0f5',
        zIndex: 4
      }
    };

    const {deleteFriend, user, updateFriendRequest, createFriendRequest , users, currentUser, friendRequests} = this.props;
    const {bio, location} = this.state;
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
          incomingUserId={friendRequests.incomingUserId} deleteFriend={deleteFriend} 
          openEditModal={this.openModal}/>

        <div className="user-side-nav">
          <UserProfileDetail user={user} />
          <UserProfileFriendsContainer friends={friends} numFriends={numFriends} />
        </div>

        { user.friendship !== null || currentUser.id === user.id ? (
          <div className="profile-post-container">
            <CreatePostFormContainer className={"post-form-profile"} user={user} />
            <PostIndexContainer />
          </div>
        ) : null}

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Update Your Profile"
        >

          {/* <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2> */}
          <div className='user-edit-modal'>
            <form className='user-edit-form' >
              <div className="user-edit-row">
                <h2>Update Your Profile</h2>
                <button onClick={this.closeModal} className="user-modal-close">&#10005;</button>
              </div>

              <div className="user-edit-row">
                <label>Where are you from?</label>
                <Input className="user-edit-input" type="text" placeholder={user.location} value={location} onChange={this.handleInput('location')}/>
              </div>
              
              {/* <div className="user-edit-row">
                <label>Gender</label>
                <Input className="user-edit-input" type="text" placeholder="Gender" value={user.gender} onChange={this.handleInput('gender')}/>
              </div> */}

              <div className="user-edit-row">
                <label>Tell me about yourself...</label>
                <Input className="user-edit-input" type="text" placeholder={user.bio} value={bio} onChange={this.handleInput('bio')}/>
              </div>

              <div className="user-edit-row">
                <button className="user-edit-submit-btn" onClick={this.handleSubmit}>Submit Update</button>
              </div>
          </form>
          </div>
        </Modal>
      </div>
    );
  }
}


export default UserProfile;
