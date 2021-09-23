import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SignIn } from '@pages/SignIn';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };