import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Auth } from './Pages/Auth/Auth';
import { User } from './Pages/User/User';

import styles from './app.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/user" component={User} />
      </Switch>
    </div>
  );
};
