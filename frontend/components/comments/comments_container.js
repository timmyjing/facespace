import {connect} from 'react-redux';
import CommentIndex from './comment_index';
import {createComment, deleteComment} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users.byId,
  post: ownProps.post,
  comments: ownProps.comments,
  currentUser: state.entities.users.byId[state.sessions.id]
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
