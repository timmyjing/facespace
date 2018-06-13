import React from 'react';
import Button from '../button/button';
import UserImageThumb from '../image/user_image_thumb';
import PostFormHeader from './post_form_header';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSweet = this.handleSweet.bind(this);
  };

  handleInput(e) {
    this.setState({content: e.target.value});
  }

  handleSweet() {
    this.setState({content: `${this.state.content} sweet`});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {content} = this.state;
    const {user} = this.props;
    const post = {
      receiver_id: user.id,
      content
    };
    this.props.submit(post);
    this.setState({content: ""});
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
          <button onClick={this.handleSubmit} className="post-form-btn">Post</button>
      </form>);

  }
}

export default PostForm;
