import React, { Component } from 'react';
import styles from './gameContainer.css';
import Chat from '../../chat/chat';
import Sidebar from '../layout/sidebar/sidebar';
import Player from '../layout/sidebar/player';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { MainListItems } from '../layout/sidebar/list-items';
import WrapContainer from '../layout/wrap/wrap-container';
import SizeableContainer from '../layout/sizeable-container';
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from 'react-router-dom';
import { initializeWS } from '../../../security/service/wsService';
import AxiosService from '../../../security/service/AxiosService';
import PartyService from '../../../security/service/PartyService';
import Test1 from '../../test/test1';
import Test2 from '../../test/test2';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      username: AxiosService.getLoggedInUserName()
    }
    initializeWS();
  }

  componentDidMount() {
    PartyService.joinParty(this.state.id, this.state.username)
      .then(
        response => {
          console.log("join");
        }
      ).catch((reason) => {
        console.log(reason);
        //this.props.history.push(`/logout`);
      });
  }



  render() {
    return (
      <>
        <Sidebar>
          <List>
            <ListItem><Player username={this.state.username} /></ListItem>
          </List>
          <Divider />
          <List>
            <ListItem><Player isCreator={true} username="Annie" /></ListItem>
            <ListItem><Player isCreator={false} username="George" /></ListItem>
            <ListItem><Player isCreator={false} username="Bertrand" /></ListItem>
            <ListItem><Player isCreator={false} username="Pierre" /></ListItem>
          </List>
          <Divider />
          <MainListItems />
        </Sidebar>
        <WrapContainer direction="row">
          <SizeableContainer size={8}>
          <button onClick={this.clickHandler}>Click me</button>
            <Switch>
              <Route path="/ready/1/test1" exact component={Test1} />
              <Route path="/ready/1/test2" exact component={Test2} />
            </Switch>
          </SizeableContainer>
          <SizeableContainer size={4}>
            <Chat id={this.state.id} username={this.state.username} />
          </SizeableContainer>
        </WrapContainer>
      </>
    );
  }

}

export default withStyles(styles, { withTheme: true })(GameContainer);