import React from 'react';
import CommentForm from './comment_form';
import {Link} from 'react-router-dom';
import UserImageThumb from '../image/user_image_thumb';
const CommentIndexItem = ({deleteComment, createComment, author, comment, currentUser}) => (
  <li className="comment-index-item" title={comment.created_at}>
      <div className="comment-content">
        <div className="comment-name-tag">
          <UserImageThumb img={author.profile_img_url} className="user-thumb"/>
          <Link to={`/users/${author.id}`}>{author.first_name} {author.last_name}</Link>
        </div>
        <div className="comment-body">
          {comment.content}
        </div>
        {author === currentUser ? <i className="post-i-delete-comment" title="Delete Comment" onClick={() => deleteComment(comment.id)}></i> : null}
      </div>
    <CommentForm currentUser={currentUser}/>
  </li>
);

export default CommentIndexItem;
