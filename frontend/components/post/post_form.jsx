import React from 'react';
import Button from '../button/button';
import UserImageThumb from '../image/user_image_thumb';
import PostFormHeader from './post_form_header';



class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      image: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSweet = this.handleSweet.bind(this);
    this.fileInput = React.createRef();
    this.handleFile = this.handleFile.bind(this);
  };

  handleInput(e) {
    this.setState({content: e.target.value});
  }

  handleSweet() {
    this.setState({content: `${this.state.content} sweet`});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {content, image} = this.state;
    const {user} = this.props;
    const formData = new FormData();
    formData.append('receiver_id', user.id);
    if (image !== null) formData.append('image', image);
    formData.append('content', content);
    this.props.submit(formData);
    this.setState({content: "", image: null});
  }

  handleFile(e) {
    this.setState({image: this.fileInput.current.files[0]});
  }

  render() {
    const {currentUser, user} = this.props;
    const placeholder = currentUser.id === user.id ? "What's on your mind?" : `Write something to ${user.first_name}...`;
    return (
      <form className={`post-form ${this.props.className}`}>
        <div className="post-form-top-border">
          <PostFormHeader />
        </div>
        <div className="post-form-input">
          <div className="form-modal-triangle"></div>
          <UserImageThumb img={currentUser.profile_img_url} className="post-user-thumb"/>
          <textarea className="post-input" type="text" placeholder={placeholder} onChange={this.handleInput} value={this.state.content} />
        </div>
        <div className="post-btns" >
          <input type="file" id="post-photo-input" className="file-input" multiple={false}  onChange={this.handleFile} ref={this.fileInput} />
          <label className="post-photo-btn" onClick={() => document.getElementById('post-photo-input').click()}>
            <div>
              <i className="profile-i-photo"/>
            </div>
            <div>
              Photo/Video
            </div>
          </label>
          <button onClick={this.handleSubmit} className="post-form-btn">Post</button>
        </div>
      </form>);
  }
}

export default PostForm;



// render() {
//   const endpoint = {
//     path: '/api/posts',
//     model: 'Post',
//     attribute: 'image',
//     method: 'POST',
//   };
//   const {currentUser, user} = this.props;
//   const placeholder = currentUser.id === user.id ? "What's on your mind?" : `Write something to ${user.first_name}...`;
//   return (
//     <form className={`post-form ${this.props.className}`}>
//       <div className="post-form-top-border">
//         <PostFormHeader />
//       </div>
//       <div className="post-form-input">
//         <div className="form-modal-triangle"></div>
//         <UserImageThumb img={currentUser.profile_img_url} className="post-user-thumb"/>
//         <textarea className="post-input" type="text" placeholder={placeholder} onChange={this.handleInput} value={this.state.content} />
//       </div>
//       <div>
//         <label>Add Photo
//             {/* <input type="file" ref={this.fileInput} /> */}
//             <ImageUpload endpoint={endpoint} onSubmit={ (e) => console.log(e) }/>
//         </label>
//         <button onClick={this.handleSubmit} className="post-form-btn">Post</button>
//       </div>
//     </form>);

// }


// (<ActiveStorageProvider
//   endpoint={endpoint}
//   onSubmit={e => console.log(e)}
//   render={({handleUpload, uploads, ready}) => (
//     <form className={`post-form ${this.props.className}`}>
//       <div className="post-form-top-border">
//         <PostFormHeader />
//       </div>
//       <div className="post-form-input">
//         <div className="form-modal-triangle"></div>
//           <UserImageThumb img={currentUser.profile_img_url} className="post-user-thumb"/>
//         <textarea className="post-input" type="text" placeholder={placeholder} onChange={this.handleInput} value={this.state.content} />
//       </div>
//       <div>
//         <label>Add Photo
//           <input type="file" disabled={!ready} onChange={e => handleUpload(e.currentTarget.files)} />
//           {/* onChange={e => handleUpload(e.currentTarget.files)} */}
//         </label>
//         <button onClick={this.handleSubmit} className="post-form-btn">Post</button>
//       </div>
//   </form>
//   )}
//   />);