import React from 'react';
import UserImageThumb from '../image/user_image_thumb';
import {Link} from 'react-router-dom';
import Button from '../button/button';

const PostIndexItem = ({post, receiver, author, currentUser, deletePost, updatePost}) => {
  const receiverLink = (author.id !== receiver.id ?
  <Link to={`/users/${receiver.id}`}> <span className="tiny-arrow">▶</span> {receiver.first_name} {receiver.last_name}</Link> : null);
  return (
    <li className="post-index-item">
    <span className="post-name-tag">
      <Link to={`/users/${author.id}`}>
          <UserImageThumb img={author.profile_img_url} className="post-user-thumb"/>
      </Link>

      <div className="post-info">
        { currentUser.id === receiver.id || currentUser.id === author.id ?
          <button className="post-action grey-button" onClick={deletePost}>Delete</button> : null }
        <div>
          <Link to={`/users/${author.id}`}>{author.first_name} {author.last_name}</Link>
          {receiverLink}
        </div>
        <div className="post-date">
          {post.created_at}
        </div>
      </div>
    </span>
    <span className="post-content">{post.content}</span>
    <hr />
    <span className="post-comment-container">
      <UserImageThumb img={currentUser.profile_img_url} className="user-thumb"/>
      <input type="text" className="post-comment" placeholder="Type something here until it does things..." />
    </span>
  </li>
  );
};

export default PostIndexItem;
