import {connect} from 'react-redux';
import SplashIndex from './splash_index';
import {demoLogin} from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.user
})

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(demoLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashIndex);
