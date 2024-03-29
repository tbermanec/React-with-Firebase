import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut/signOut'
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session/session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser
          ? <NavigationAuth />
          : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
    </ul>
  </div>
);
export default Navigation;