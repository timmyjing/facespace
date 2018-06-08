import React from 'react'
import { Link, Switch, Route, HashRouter } from 'react-router-dom';
import SessionFormContainer from './components/session_form/session_form_container';
import CreateUserContainer from './components/user_form/create_user_container';

import SessionNavBar from './components/session_form/session_nav_bar';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import HeaderContainer from './components/header/header_container';
import MainContainer from './components/user_form/main_container';
import UserProfileContainer from './components/users/user_profile_container';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={SessionNavBar} />
    <AuthRoute exact path="/" component={MainContainer} />
    <ProtectedRoute path="/" component={HeaderContainer} />
    <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
  </div>
);


export default App;
