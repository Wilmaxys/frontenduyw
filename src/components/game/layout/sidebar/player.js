import React, {Component} from 'react';
import Avatar from '../../../avatar/avatar';
import { withStyles } from "@material-ui/core/styles";
import styles from './player.css';
import Chip from '@material-ui/core/Chip';

class Player extends Component {

render() {
  const { classes } = this.props;
  return (
    <>
      <Avatar>{this.props.username.charAt(0).toUpperCase()}</Avatar>
      <div className={classes.pseudo}>
        <div>{this.props.username}</div>
        <div>
        {this.props.isCreator &&
          <Chip
            label="Creator"
            color="primary"
            className={classes.tag}
          />
        }
        </div>
      </div>
      <div>{this.props.score}</div>
    </>
)}
};

export default withStyles(styles, { withTheme: true })(Player);
