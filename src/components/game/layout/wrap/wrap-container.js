import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './wrap-container.css';

const UYW_wrapContainer = (props) => {
  const classes = useStyles();
  const direction = (props.direction!==undefined) ? props.direction : "column";
  return (
    <Grid container className={classes.container} style={{flexDirection: direction}}>
      {props.children}
    </Grid>
  );
}

export default UYW_wrapContainer;