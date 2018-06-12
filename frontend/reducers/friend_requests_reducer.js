import {RECEIVE_FRIEND_REQUESTS, ACCEPT_FRIEND_REQUEST, DECLINE_FRIEND_REQUEST, SEND_FRIEND_REQUEST} from '../actions/friend_request_actions';
import merge from 'lodash/merge';
const defaultState = ({
  byId: {},
  outgoingId: [],
  incomingId: [],
  outgoingUserId: [],
  incomingUserId: []
});

const friendRequestsReducer = (state = defaultState, action ) => {
  let newState = merge( {}, state);
  let userIndex, idIndex;

  switch(action.type) {
    case RECEIVE_FRIEND_REQUESTS:
      return merge( newState, action.requests);
    case SEND_FRIEND_REQUEST:
      // newState = merge(newState, {byId: {[action.request.id]: action.request}})
      newState.byId[action.request.id] = action.request;
      newState.outgoingId.push(action.request.id);
      newState.outgoingUserId.push(action.request.requestee_id);
      return newState;
    case ACCEPT_FRIEND_REQUEST:
    case DECLINE_FRIEND_REQUEST:
      delete newState.byId[action.request.id]
      userIndex = newState.incomingUserId.indexOf(action.request.requester_id);
      idIndex = newState.incomingId.indexOf(action.request.id);
      newState.incomingId = newState.incomingId.slice(0, idIndex).concat(newState.incomingId.slice(idIndex + 1));
      newState.incomingUserId = newState.incomingUserId.slice(0, userIndex).concat(newState.incomingUserId.slice(userIndex + 1));
      return newState;
    default:
      return state;
  }
}

export default friendRequestsReducer;
