import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

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

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
