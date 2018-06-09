import {connect} from 'react-redux';
import FriendRequestIndex from './friend_request_index';
import React from 'react';
import {fetchFriendRequests, acceptFriendRequest, declineFriendRequest} from '../../actions/friend_request_actions';

class FriendRequestContainer extends React.Component {

  componentWillMount() {
    // FETCH CURRENT SESSION FRIEND REQUESTS
    this.props.fetchFriendRequests();
  }


  render() {
    if (this.props.friendRequests === undefined) return (<div>Loading</div>);
    const {users, friendRequests, declineFriendRequest, acceptFriendRequest} = this.props;

    return (
        <FriendRequestIndex requests={friendRequests} users={users} decline={declineFriendRequest} accept={acceptFriendRequest} />
    );
  }
}


const mapStateToProps = state => ({
  users:  state.entities.users.byId,
  friendRequests: state.entities.friendRequests.allId.map( id => state.entities.friendRequests.byId[id])
});

const mapDispatchToProps = dispatch => ({
  fetchFriendRequests: () => dispatch(fetchFriendRequests()),
  declineFriendRequest: id => dispatch(declineFriendRequest(id)),
  acceptFriendRequest: id => dispatch(acceptFriendRequest(id))
});



export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestContainer);
