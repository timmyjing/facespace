import {connect} from 'react-redux';
import PostIndex from './post_index'
import {withRouter} from 'react-router-dom';
import {fetchPosts} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users.byId;
  const posts = state.entities.posts.byId;
  const currentUser = users[state.sessions.id];
  const user = ownProps.match.params.userId === undefined ?  (users[state.sessions.id]) : (users[ownProps.match.params.userId]);
  const className = "post-index";
  return {
    posts,
    users,
    user,
    currentUser,
    className
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default withRouter(connect(mapStateToProps, null)(PostIndex));
