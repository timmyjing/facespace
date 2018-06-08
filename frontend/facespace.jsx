import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import * as SessionApiUtil from './util/session_api_util';
import * as UserApiUtil from './util/user_api_util';
import configureStore from './store/store';
import {requestUsers, requestUser, searchUsers} from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    console.log(window.currentUser);
    const userId = window.currentUser.id;
    const userInfo = window.currentUser;

    const preloadedState = { entities: { users: { byId: { [userId]: userInfo }, allId: []}},
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
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
