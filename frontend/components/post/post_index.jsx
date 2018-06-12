import React from 'react';
import PostIndexItem from './post_index_item';

const PostIndex = ({users, posts, user, currentUser, className}) => (
    <ul className={className} >
      { user.post_id.map( id => <PostIndexItem key={id} post={posts[id]} currentUser={currentUser}
        author={users[posts[id].author_id]} receiver={users[posts[id].receiver_id]} />) }
    </ul>
);

export default PostIndex;
