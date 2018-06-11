import {RECEIVE_FRIEND_REQUESTS, ACCEPT_FRIEND_REQUEST, DECLINE_FRIEND_REQUEST, SEND_FRIEND_REQUEST} from '../actions/friend_request_actions';
import merge from 'lodash/merge';
const defaultState = ({
  byId: {},
  outgoingId: [],
  incomingId: [],
  outgoingUserId: []
});

const friendRequestsReducer = (state = defaultState, action ) => {
  let newState = merge( {}, state);

  switch(action.type) {
    case RECEIVE_FRIEND_REQUESTS:
      return action.requests;
    case SEND_FRIEND_REQUEST:
      // newState = merge(newState, {byId: {[action.request.id]: action.request}})
      newState.byId[action.request.id] = action.request;
      newState.outgoingId.push(action.request.id);
      newState.outgoingUserId.push(action.request.requestee_id);
      return newState;
    case ACCEPT_FRIEND_REQUEST:
    case DECLINE_FRIEND_REQUEST:
      delete newState.byId[action.request.id]
      newState.incomingId = Object.keys(newState.byId);
      return newState;
    default:
      return state;
  }
}

export default friendRequestsReducer;
