import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

import * as SessionApiUtil from './util/session_api_util';
import * as UserApiUtil from './util/user_api_util';
import {requestUsers, requestUser, searchUsers} from './actions/user_actions';
import {createFriendRequest, updateFriendRequest} from './util/friend_request_api_util';
import {fetchFriendRequests} from './actions/friend_request_actions';
import {createPost, requestPosts} from './actions/post_actions';
import {createLike} from './actions/like_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const userId = window.currentUser.id;
    const userInfo = window.currentUser;

    const preloadedState = { entities: { users: { byId: { [userId]: userInfo , friends_id: [], post_id: []}, allId: []},
                                         friendRequest: { byId: {}, allId: [], outgoingId: [], outgoingUserId: [], incomingId: [], incomingUserId: [] } ,
                                         posts: { byId: { comment_id: [] , like_id: [] }, allId: [] },
                                         likes: { byId: {}},
                                         comments: {byId: {}, allId: [] }
                                       },
                             sessions: { id: userId },
                             ui: {loading: false, searchId: []}
                           };
    store = configureStore(preloadedState);

  } else {
    store = configureStore();
  }
// TESTING
  window.store = store;


  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
