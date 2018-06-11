import {connect} from 'react-redux';
import {createPost} from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users.byId[state.sessions.id],
  user: state.entities.users.byId[ownProps.user.id],
  className: ownProps.className
});


const mapDispatchToProps = dispatch => ({
  submit: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
