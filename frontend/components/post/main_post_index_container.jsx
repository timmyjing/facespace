import React from 'react';
import {connect} from 'react-redux';
import PostIndex from './post_index';
import {requestPosts, deletePost, updatePost} from '../../actions/post_actions';

class MainPostIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.requestPosts().then( () => this.setState({loading: false}));
  }


  render() {
    if (this.state.loading === true) return null;
    const {users, posts, currentUser, user, updatePost, deletePost, comments} = this.props;
    return (<PostIndex comments={comments} user={user} updatePost={updatePost} deletePost={deletePost} posts={posts} currentUser={currentUser} users={users} className="main-post-index"/>);
  }

}




const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users.byId;
  const posts = state.entities.posts.allId.map( id => state.entities.posts.byId[id]);
  const currentUser = users[state.sessions.id];
  // Polymorphism lol kinda ugly, post index takes the user post_id array (their received posts) and renders it
  // since the main post index is not associated with the container, will used post allIds for order
  const user = {post_id: state.entities.posts.allId};
  const comments = state.entities.comments.byId;

  return {
    posts,
    users,
    user,
    currentUser,
    comments
  };
};

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: id => () => dispatch(deletePost(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPostIndexContainer);
