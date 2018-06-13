import React from 'react';
import PostIndexItem from './post_index_item';
import UserImageThumb from '../image/user_image_thumb';

const PostIndex = ({users, posts, user, currentUser, className, updatePost, deletePost, comments}) => (
    <ul className={className} >
      { posts.map( post =>
        <PostIndexItem key={post.id} post={post} currentUser={currentUser}
          author={users[post.author_id]} receiver={users[post.receiver_id]}
          deletePost={deletePost(post.id)} updatePost={updatePost}
          comments={post.comment_id.map(comment_id => comments[comment_id])}
          users={users}
          />) }
    </ul>
);

export default PostIndex;
