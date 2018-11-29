import React from 'react';
import CommentForm from './comment_form';
import {Link} from 'react-router-dom';
import UserImageThumb from '../image/user_image_thumb';
// const CommentIndexItem = ({deleteComment, createComment, author, comment, currentUser}) => (
//   <li className="comment-index-item" title={comment.created_at}>
//       <div className="comment-content">
//         <div className="comment-name-tag">
//           <UserImageThumb img={author.profile_img_url} className="user-thumb"/>
//           <Link to={`/users/${author.id}`}>{author.first_name} {author.last_name}</Link>
//         </div>
//         <div className="comment-body">
//           {comment.content}
//         </div>
//         {author === currentUser ? <i className="post-i-delete-comment" title="Delete Comment" 
//           onClick={() => deleteComment(comment.id)}></i> : null}
//       </div>
//   </li>
// );


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.comment.content,
      displayOptions: false,
      edit: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleInput(e) {
    console.log(e);
    this.setState({content: e.target.value});
  }

  toggleOptions() {
    this.setState({displayOptions: !this.state.displayOptions});
  }

  toggleEdit() {
    const edit = !this.state.edit;
    const {comment} = this.state;

    this.setState({edit, displayOptions: false});
  }

  handleUpdate(e) {
    e.preventDefault();
    const {updateComment, comment} = this.props;
    const {content} = this.state;
    comment.content = content;
    this.setState({edit: false})
    updateComment(comment);
  }

  render() {
    const {deleteComment, createComment, author, currentUser, comment} = this.props;
    const {edit, displayOptions, content} = this.state;

    return (<li className="comment-index-item" title={comment.created_at}>
      <div className="comment-content">
        <div className="comment-name-tag">
          <UserImageThumb img={author.profile_img_url} className="user-thumb"/>
          <Link to={`/users/${author.id}`}>{author.first_name} {author.last_name}</Link>
        </div>
        <div className="comment-body">
          {edit ?
          <form onSubmit={this.handleUpdate}>
            <input autoFocus="true" type='text' id={`comment-${comment.id}`} onChange={this.handleInput} value={content} /> 
          </form> : content}
        </div>
        {author === currentUser ? 
        <div className="comment-options">
          <button onClick={this.toggleOptions}>...</button>
          <ul className={displayOptions ? 'post-options-show' : 'post-options-hide'}>
          {currentUser.id === author.id ? <li className="post-options-item" onClick={this.toggleEdit}>Edit</li> : null}
            <li className="post-options-item" onClick={() => deleteComment(comment.id)}>Delete</li>
          </ul>
        </div> : null}
      </div>
    </li>);
  }

}

export default CommentIndexItem;
