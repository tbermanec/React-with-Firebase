import React from 'react';

import AuthUserContext from './sessionContext'
import withAuthentication from './withAuthentication';


const Session = () => (
  <div>
    <h1>Session</h1>
  </div>
);

export default Session;

export { AuthUserContext, withAuthentication };