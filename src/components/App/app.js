import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation/navigation'
import LandingPage from '../Landing/landing';
import SignUpPage from '../SignUp/signUp';
import SignInPage from '../SignIn/signIn';
import PasswordForgetPage from '../PasswordForget/passwordForget';
import HomePage from '../Home/home';
import AccountPage from '../Account/account';
import AdminPage from '../Admin/admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session/session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);



export default withAuthentication(App);