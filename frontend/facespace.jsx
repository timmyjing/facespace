import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

import * as SessionApiUtil from './util/session_api_util';
import * as UserApiUtil from './util/user_api_util';
import {requestUsers, requestUser, searchUsers} from './actions/user_actions';
import {createFriendRequest, updateFriendRequest} from './util/friend_request_api_util';
import {fetchFriendRequests} from './actions/friend_request_actions';
import {createPost} from './actions/post_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const userId = window.currentUser.id;
    const userInfo = window.currentUser;

    const preloadedState = { entities: { users: { byId: { [userId]: userInfo }, allId: []},
                                         friendRequest: { byId: {}, allId: []} },
                             sessions: { id: userId } };
    store = configureStore(preloadedState);

  } else {
    store = configureStore();
  }
// TESTING
  window.login = SessionApiUtil.login;
  window.logout = SessionApiUtil.logout;
  window.signup = SessionApiUtil.signup;
  window.requestUsers = requestUsers;
  window.requestUser = requestUser;
  window.store = store;
  window.searchUsers = searchUsers;
  window.createFriendRequest = createFriendRequest;
  window.updateFriendRequest = updateFriendRequest;
  window.fetchFriendRequests = fetchFriendRequests;
  window.createPost = createPost;


  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
