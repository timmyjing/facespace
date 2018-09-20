import React from 'react';
import UserImageThumb from '../image/user_image_thumb';
import {Link} from 'react-router-dom';
import Button from '../button/button';
import CommentsContainer from '../comments/comments_container';
import ReactPlayer from 'react-player'



class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOptions: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.focusCommentInput = this.focusCommentInput.bind(this);
  }

  toggleEdit() {
    this.props.openEditModal(this.props.post);
    this.setState({displayOptions: false});
  }

  toggleOptions() {
    this.setState({displayOptions: !this.state.displayOptions});
  }

  focusCommentInput() {
    const postId = this.props.post.id;
    const input = document.getElementById(`post-${postId}-comment`);

    input.focus();
  }

  render() {
    const {post, receiver, author, currentUser, deletePost, updatePost, comments, unlikePost, likePost, likes, users, openEditModal } = this.props;
    const {displayOptions} = this.state;
    const likesMessage = post.like_id.length !== 0 ?
                            (post.liked ?
                              (post.like_id.length > 1 ?
                                (post.like_id.length > 2 ? `You and ${post.like_id.length - 1} others think this is sweet.` : 'You and 1 other think this is sweet.') :
                                  'You think this is sweet.') : (post.like_id.length > 1 ? `${post.like_id.length} sweets` : `1 sweet`)) : null;

    const likesDisplay = likesMessage ? <div className="post-likes-count">{likesMessage}</div> : null;
    const receiverLink = (author.id !== receiver.id ?
      <Link to={`/users/${receiver.id}`}> <span className="tiny-arrow">▶</span> {receiver.first_name} {receiver.last_name}</Link> : null);
    const imageDisplay = post.image ? <img className="post-image" src={post.image} /> : null;
    const regexp = /https:\/\/\S+/;
    const mediaUrl = regexp.exec(post.content);
    const contentDisplay = <div className="post-content">{post.content}</div>;
    const validSites = ['www.youtube.com', 'soundcloud.com', 'www.mixcloud.com', 'www.twitch.com', 'www.streamables.com', 'www.vimeo.com', 'www.dailymotion.com'];
    const validMediaUrl = mediaUrl !== null ? validSites.some( site => mediaUrl[0].indexOf(site) !== -1) : false;
    const mediaPlayer = validMediaUrl ? <ReactPlayer url={mediaUrl[0]} height="360px" width="auto"/> : null;
    return (
      <li className="post-index-item">
        { currentUser.id === receiver.id || currentUser.id === author.id ? 
          (<div className="post-options">
            <button onClick={this.toggleOptions}>...</button>
            {/* TODO Refactor More Options Button */}
            <ul className={displayOptions ? 'post-options-show' : 'post-options-hide'}>
              {currentUser.id === author.id ? <li className="post-options-item" onClick={this.toggleEdit}>Edit Post</li> : null}
              <li className="post-options-item" onClick={deletePost}>Delete</li>
            </ul>
          </div>) : null }
        <div className="post-name-tag">
          <Link to={`/users/${author.id}`}>
              <UserImageThumb img={author.profile_img_url} className="post-user-thumb"/>
          </Link>
          <div className="post-info">
            <div>
              <Link to={`/users/${author.id}`}>{author.first_name} {author.last_name}</Link>
              {receiverLink}
            </div>
            <div className="post-date">
              {post.created_at}
            </div>
          </div>
        </div>
        <div>
          {contentDisplay}
          {imageDisplay}
          {mediaPlayer}
        </div>
        <div className="post-likes">
            <ul className="post-actions">
              { post.liked ? <li className="post-liked" onClick={() => unlikePost(post.liked.id)}><i className="post-action-like" />Sweet</li> : <li onClick={() => likePost(post.id)}><i className="post-action-like" />Sweet</li> }
              {/* add focus on comment input */}
              <li onClick={this.focusCommentInput}><i className="post-action-comment" />Comment</li>
              <li style={{cursor: 'not-allowed'}}><i className="post-action-share" />Share</li>
            </ul>
        </div>
        {likesDisplay}
        <span className="post-comment-container">
          <CommentsContainer post={post} comments={comments} />
        </span>
    </li>
    );
  }
}


export default PostIndexItem;
