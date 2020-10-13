import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import Test from './components/test/test';
import Game from './views/game/game';
import Ready from './components/game/ready/ready';
import AuthenticatedRoute from './security/components/AuthenticatedRoute';
import AuthenticationService from './security/service/AuthenticationService';
import LoginComponent from './security/components/LoginComponent';
import Login from './components/security/login/login';
import Register from './components/security/register/register';
import LogoutComponent from './security/components/LogoutComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {AuthenticationService.isUserLoggedIn()
        ? <Game>
            <Switch>
                <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                <AuthenticatedRoute path="/" exact component={Ready} />
            </Switch>
          </Game>
        : <Switch>
              <Route path="/register" exact component={Register} />
              <Route path="/" exact component={Login} />
              <Redirect from="/" to="/" />
          </Switch>
      }
      </BrowserRouter>
    );
  }
}

export default App;