import React from 'react';
import {Link} from 'react-router-dom';
import SessionFormContainer from './session_form_container';


const SessionNavBar = () => (
  <nav className="nav-bar fb-blue-bg">
    <Link className="facebook-logo" to="/">facespace</Link>
    <SessionFormContainer />
  </nav>
);


export default SessionNavBar;
