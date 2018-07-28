import React from 'react';
import PostIndexItem from './post_index_item';
import UserImageThumb from '../image/user_image_thumb';
import Modal from 'react-modal';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      content: null,
      postId: null
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal(post) {
    this.setState({modalIsOpen: true, content: post.content, postId: post.id});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleInput(e) {
    this.setState({content: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    const post = {content: this.state.content, id: this.state.postId};
    this.props.updatePost(post).then( () => this.setState({content: null, postId: null, modalIsOpen: false}));
  }

  renderModal() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    const {content} = this.state;
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div>
        <div>Edit Post</div>
        <button onClick={this.closeModal}>close</button>
      </div>
      <form>
        <textarea className="post-input" type="text" onChange={this.handleInput} value={this.state.content} />
        <button className="post-form-btn" onClick={this.handleSubmit}>Save</button>
      </form>
    </Modal>
    );
  }



  render() {
    const {users, posts, user, currentUser, className, updatePost, deletePost, comments, likes, likePost, unlikePost} = this.props;
    const {modalIsOpen} = this.state;
    return (
      <div>
        {this.renderModal()}
        <ul id="user-timeline" className={className} >
          { posts.map( post =>
            <PostIndexItem key={post.id}
              post={post}
              currentUser={currentUser}
              author={users[post.author_id]}
              receiver={users[post.receiver_id]}
              deletePost={deletePost(post.id)}
              likes={likes}
              users={users}
              likePost={likePost}
              unlikePost={unlikePost}
              updatePost={updatePost}
              comments={post.comment_id.map(comment_id => comments[comment_id])}
              openEditModal={this.openModal}
              />) }
        </ul>
      </div>
    );
  }
}

export default PostIndex;


// const PostIndex = ({users, posts, user, currentUser, className, updatePost, deletePost, comments, likes, likePost, unlikePost}) => (
//     <ul id="user-timeline" className={className} >
//       { posts.map( post =>
//         <PostIndexItem key={post.id}
//           post={post}
//           currentUser={currentUser}
//           author={users[post.author_id]}
//           receiver={users[post.receiver_id]}
//           deletePost={deletePost(post.id)}
//           likes={likes}
//           users={users}
//           likePost={likePost}
//           unlikePost={unlikePost}
//           updatePost={updatePost}
//           comments={post.comment_id.map(comment_id => comments[comment_id])}
//           />) }
//     </ul>
//   );

// export default PostIndex;
