import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './ready.css';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { publish } from '../../../../security/service/wsService';

class Ready extends Component {

    constructor(props){
        super(props);

        this.state = {
          id: 0,
          username: "",
          game: {
            players: []
          }
        };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      this.setState({
        id: this.props.state.id,
          username: this.props.state.username,
          game: {...this.state.game, ...this.props.state.game}
      });
    }

    handleSubmit(event) {
      publish('/game/' + this.state.id + '/ready', { username: this.state.username });
      event.preventDefault();
    }

    render(){
        const { classes } = this.props;
        return (
            <>
              
              <Grid container className={classes.avatarContainer}>
              <Grid item xs={12}>
                <Button fullWidth onClick={this.handleSubmit} className={classes.mt4} variant="contained" color="primary">
                  Ready
                </Button>
              </Grid>
                {
                  this.state.game.players.map((object, i) => {
                    return (
                      <Grid key={i}className={classes.avatarBig} item xs={3}>
                        <div className={classes.shape + " " + classes.square + " " + (object.ready ? classes.shapeActive : "")} >
                          <div className={classes.contentShape}>
                            {object.username}
                          </div>
                        </div>
                      </Grid>
                      )
                  })
                }
              </Grid>
            </>
        );
    }
    
}

export default withStyles(styles, { withTheme: true })(Ready);