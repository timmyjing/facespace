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
    const {users, posts, currentUser, user, updatePost, deletePost} = this.props;
    return (<PostIndex user={user} updatePost={updatePost} deletePost={deletePost} posts={posts} currentUser={currentUser} users={users} className="main-post-index"/>);
  }

}




const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users.byId;
  const posts = state.entities.posts.allId.map( id => state.entities.posts.byId[id]);
  const currentUser = users[state.sessions.id];
  // Polymorphism lol kinda ugly
  const user = {post_id: state.entities.posts.allId};

  return {
    posts,
    users,
    user,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: id => () => dispatch(deletePost(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPostIndexContainer);
