import React from 'react';
import Button from '../button/button';
import UserImageThumb from '../image/user_image_thumb';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  };

  handleInput(e) {
    this.setState({content: e.target.value});
  }


  handleSubmit() {
    const {content} = this.state;
    const {user} = this.props;
    const post = {
      receiver_id: user.id,
      content
    };
    this.props.submit(post).then(() => this.setState({content: ""}));
  }



  render() {
    const {currentUser, user} = this.props;
    const placeholder = currentUser.id === user.id ? "What's on your mind?" : `Write something to ${user.first_name}...`;

    return (
      <form className={`post-form ${this.props.className}`} onSubmit={this.handleSubmit}>
        <div className="post-form-top-border"></div>
        <div className="post-form-input">
          <UserImageThumb img={currentUser.profile_img_url} className="post-user-thumb"/>
          <input type="text" placeholder={placeholder} onChange={this.handleInput} value={this.state.content} />
        </div>
        <Button label={"Post"} />
      </form>);

  }
}

export default PostForm;
