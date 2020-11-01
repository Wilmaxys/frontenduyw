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
import { subscribe, waitForConnect, publish } from '../../../security/service/wsService';
import Ready from '../step/ready/ready';
import Proposition from '../step/proposition/proposition';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      username: AxiosService.getLoggedInUserName(),
      game: {
        players: []
      }
    }
    initializeWS();

    window.addEventListener("beforeunload", (ev) => {
      PartyService.unjoinAllParty(this.state.username)
        .then(
          response => {
            console.log("unjoin");
          }
        ).catch((reason) => {
          console.log(reason);
          //this.props.history.push(`/logout`);
        });

      publish('/game/disconnected', { username: this.state.username });

    });
  }

  async componentDidMount() {
    await waitForConnect();
    subscribe('/game/' + this.state.id + '/joined', response => {
      this.setState({
        game:
        {
          players: [...this.state.game.players, { username: response.body, ready: false, response: "" }]
        }
      })
    });

    subscribe('/game/disconnected', response => {
      let responseJson = JSON.parse(response.body);

      var index = -1;

      for (var i = 0; i < this.state.game.players.length; i++) {
        if (this.state.game.players[i].username === responseJson.username) {
          index = i;
        }
      }

      var array = this.state.game.players;

      if (index !== -1) {
        array.splice(index, 1)
      }

      this.setState({
        game:
        {
          players: array
        }
      })

    });

    subscribe('/game/' + this.state.id + '/ready', response => {
      let array = [...this.state.game.players];
      let object = JSON.parse(response.body);
      let AllReady = true;

      console.log(array);

      array.forEach(element => {
        if(object.username === element.username){
          element.ready = !element.ready;
        }
        if(element.ready === false)
        {
          AllReady = false;
        }
      });

      this.setState({
        game:
        {
          players: array
        }
      });

      if(AllReady === true)
      {
        this.props.history.push(`/ready/${this.state.id}/input`);
      }
    });

    PartyService.retrieveAllPartyPlayers(this.state.id)
      .then(
        response => {
          let array = [...this.state.game.players];

          response.data.forEach(element => {
            array = [...this.state.game.players, { username: element.username, ready: false, response: "" }];
          });

          this.setState({
            game:
            {
              players: [...this.state.game.players, ...array]
            }
          })
        }
      ).catch((reason) => {
        this.props.history.push(`/logout`);
      });

    PartyService.joinParty(this.state.id, this.state.username)
      .then(
        response => {
          console.log("join");
        }
      ).catch((reason) => {
        console.log(reason);
        this.props.history.push(`/logout`);
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
            {
              this.state.game.players.map((object, i) => {
                return (<ListItem key={i}><Player username={object.username} /></ListItem>)
              })
            }
          </List>
          <Divider />
          <MainListItems />
        </Sidebar>
        <WrapContainer direction="row">
          <SizeableContainer size={8}>
            <Switch>
             <Route path={"/ready/"+this.state.id+"/input"} exact component={() => { return <Proposition state={this.state} /> }} />
              <Route path={"/ready/"+this.state.id} component={() => { return <Ready state={this.state} /> }} />
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