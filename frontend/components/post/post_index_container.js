import {connect} from 'react-redux';
import PostIndex from './post_index'
import {withRouter} from 'react-router-dom';
import {updatePost, deletePost} from '../../actions/post_actions';
import {createLike, deleteLike} from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users.byId;
  // const posts = state.entities.posts.byId;
  const posts = state.entities.posts.allId.map( id => state.entities.posts.byId[id]);
  const currentUser = users[state.sessions.id];
  const user = ownProps.match.params.userId === undefined ?  (users[state.sessions.id]) : (users[ownProps.match.params.userId]);
  const comments = state.entities.comments.byId;
  const className = "post-index";
  const likes = state.entities.likes.byId;
  return {
    posts,
    users,
    user,
    currentUser,
    className,
    comments,
    likes
  };
};

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  deletePost: id => () => dispatch(deletePost(id)),
  likePost: id => dispatch(createLike({liked_id: id, liked_type: 'Post'})),
  unlikePost: id => dispatch(deleteLike(id))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));
