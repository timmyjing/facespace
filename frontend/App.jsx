import React from 'react'
import { Link, Switch, Route, HashRouter } from 'react-router-dom';
import SessionFormContainer from './components/session_form/session_form_container';
import CreateUserContainer from './components/user_form/create_user_container';

import SessionNavBar from './components/session_form/session_nav_bar';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import HeaderContainer from './components/header/header_container';
import MainContainer from './components/user_form/main_container';
import UserProfileContainer from './components/user_profile/user_profile_container';
import HomeMainContainer from './components/main/home_main_container';

const App = () => (
  <div>
    <AuthRoute path="/" component={SessionNavBar} />
    <AuthRoute path="/" component={MainContainer} />
    <ProtectedRoute path="/" component={HeaderContainer} />
    <ProtectedRoute exact path="/" component={HomeMainContainer} />
    <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
  </div>
);


export default App;
