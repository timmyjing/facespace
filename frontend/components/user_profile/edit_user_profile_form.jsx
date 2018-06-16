import {connect} from 'react-redux';

const mapStateToProps = state => ({
  user: state.entities.users.byId[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  edit: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
