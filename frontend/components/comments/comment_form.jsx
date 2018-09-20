import React from 'react';
import UserImageThumb from '../image/user_image_thumb';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({content: this.state.content, post_id: this.props.post.id});
    this.setState({content: ""});
  }

  handleInput(e) {
    this.setState({content: e.target.value});
  }


  render() {
    const postId = this.props.post.id;

    return (<form className="comment-form" onSubmit={this.handleSubmit}>
                <UserImageThumb img={this.props.currentUser.profile_img_url} className="user-thumb" />
                <input type="text" className="post-comment" onChange={this.handleInput} id={`post-${postId}-comment`} value={this.state.content}
                  placeholder="Write a comment..."/>
            </form>);
  }

}


export default CommentForm;
