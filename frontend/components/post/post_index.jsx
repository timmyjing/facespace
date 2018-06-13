import React from 'react';
import PostIndexItem from './post_index_item';

const PostIndex = ({users, posts, user, currentUser, className, updatePost, deletePost}) => (
    <ul className={className} >
      { posts.map( post =>
        <PostIndexItem key={post.id} post={post} currentUser={currentUser}
          author={users[post.author_id]} receiver={users[post.receiver_id]}
          deletePost={deletePost(post.id)} updatePost={updatePost} />) }
    </ul>
);

export default PostIndex;
