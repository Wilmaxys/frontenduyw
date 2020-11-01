import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './game.css';

const Game = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {props.children}
    </div>
  );
}

export default Game;