import React from 'react';
import CommentForm from './comment_form';
import CommentIndexItem from './comment_index_item';


const CommentIndex = ({createComment, post, currentUser, comments, users, deleteComment, updateComment}) => (
  <ul className="comments-index">
    <li className="comment-index-item">
      <CommentForm currentUser={currentUser} post={post} createComment={createComment} />
    </li>
    {comments.map( comment =>
      <CommentIndexItem key={comment.id} currentUser={currentUser} comment={comment} 
        author={users[comment.author_id]} deleteComment={deleteComment} 
        updateComment={updateComment} />
    )}
  </ul>
);


export default CommentIndex;
