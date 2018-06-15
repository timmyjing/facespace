import React from 'react';
import UserImageThumb from '../image/user_image_thumb';
import {Link} from 'react-router-dom';
import Button from '../button/button';
import CommentsContainer from '../comments/comments_container';



class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      content: this.props.post.content,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleInput(e) {
    this.setState({content: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    const post = {content: this.state.content, id: this.props.post.id};
    this.props.updatePost(post).then( () => this.setState({update: false}));
  }

  toggleEdit() {
    const update = (this.state.update ? false : true);
    this.setState({update});
  }


  render() {
    const {post, receiver, author, currentUser, deletePost, updatePost, comments, unlikePost, likePost, likes, users } = this.props;
    console.log(post);
    const likesMessage = post.like_id.length !== 0 ?
                            (post.liked ?
                              (post.like_id.length > 1 ?
                                (post.like_id.length > 2 ? `You and ${post.like_id.length - 1} others think this is sweet.` : 'You and 1 other think this is sweet.') :
                                  'You think this is sweet.') : (post.like_id.length > 1 ? `${post.like_id.length} sweets` : `1 sweet`)) : "";

    const receiverLink = (author.id !== receiver.id ?
      <Link to={`/users/${receiver.id}`}> <span className="tiny-arrow">▶</span> {receiver.first_name} {receiver.last_name}</Link> : null);

    const contentDisplay = this.state.update === true ? (<textarea value={this.state.content} onChange={this.handleInput} className="post-edit"/> ) : (post.content);

    const postButton = this.state.update === true ? <li onClick={this.handleSubmit}>Edit</li> : <li><i className="post-action-comment" />Comment</li>;
    return (
      <li className="post-index-item">
      <div className="post-name-tag">
        <Link to={`/users/${author.id}`}>
            <UserImageThumb img={author.profile_img_url} className="post-user-thumb"/>
        </Link>

        <div className="post-info">
          { currentUser.id === receiver.id || currentUser.id === author.id ?
            <i className="post-action-delete" title="Delete Post" onClick={deletePost}></i> : null }
          { currentUser.id === author.id ? <i className="post-action-edit" title="Edit Post" onClick={this.toggleEdit}></i> : null}
          <div>
            <Link to={`/users/${author.id}`}>{author.first_name} {author.last_name}</Link>
            {receiverLink}
          </div>
          <div className="post-date">
            {post.created_at}
          </div>
        </div>
      </div>
      <div className="post-content">
        {contentDisplay}
      </div>
      <div className="post-likes">
          <ul className="post-actions">
            { post.liked ? <li className="post-liked" onClick={() => unlikePost(post.liked.id)}><i className="post-action-like" />Sweet</li> : <li onClick={() => likePost(post.id)}><i className="post-action-like" />Sweet</li> }
            {postButton}
            <li><i className="post-action-share" />Share</li>
          </ul>
      </div>
      <div className="post-likes-count">
        {likesMessage}
      </div>
      <hr />
      <span className="post-comment-container">
        <CommentsContainer post={post} comments={comments} />
      </span>
    </li>
    );
  }
}


export default PostIndexItem;
