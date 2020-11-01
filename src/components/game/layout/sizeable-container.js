import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './sizeable-container.css';

const UYW_sizeableContainer = (props) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.container} xs={props.size}>
            {props.children}
        </Grid>
    );
}

export default UYW_sizeableContainer;