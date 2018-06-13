import React from 'react';
import UserImageThumb from '../image/user_image_thumb';
import {Link} from 'react-router-dom';
import Button from '../button/button';
import CommentsContainer from '../comments/comments_container';

const PostIndexItem = ({post, receiver, author, currentUser, deletePost, updatePost, comments, users}) => {
  const receiverLink = (author.id !== receiver.id ?
  <Link to={`/users/${receiver.id}`}> <span className="tiny-arrow">▶</span> {receiver.first_name} {receiver.last_name}</Link> : null);
  return (
    <li className="post-index-item">
    <div className="post-name-tag">
      <Link to={`/users/${author.id}`}>
          <UserImageThumb img={author.profile_img_url} className="post-user-thumb"/>
      </Link>

      <div className="post-info">
        { currentUser.id === receiver.id || currentUser.id === author.id ?
          <i className="post-i-delete" title="Delete Post" onClick={deletePost}></i> : null }
        <div>
          <Link to={`/users/${author.id}`}>{author.first_name} {author.last_name}</Link>
          {receiverLink}
        </div>
        <div className="post-date">
          {post.created_at}
        </div>
      </div>
    </div>
    <div className="post-content">{post.content}</div>
    <hr />
    <span className="post-comment-container">
      <CommentsContainer post={post} comments={comments} />
    </span>
  </li>
  );
};

export default PostIndexItem;
