import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Game from './views/game/game';
import GameContainer from './components/game/gameContainer/gameContainer';
import Home from './components/game/home/home';
import Add from './components/game/form/Add';
import AuthenticatedRoute from './security/components/AuthenticatedRoute';
import Login from './components/security/login/login';
import Register from './components/security/register/register';
import LogoutComponent from './components/security/logout/logout';

class App extends Component {
  render() {
    return (
      <Game>
        <BrowserRouter>
          <Switch>
            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
            <AuthenticatedRoute path="/ready/:id" component={GameContainer} />
            <AuthenticatedRoute path="/add" exact component={Add} />
            <AuthenticatedRoute path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Redirect from="/" to="/" />
          </Switch>
        </BrowserRouter>
      </Game>
    );
  }
}

export default App;