import React from 'react';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './ready.css';
import Chat from '../../chat/chat';

const Ready = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={8} className={classes.gridContainer}>
        <Grid container className={classes.avatarContainer}>
          <Grid className={classes.avatarBig} item xs={3}>
            <div className={classes.shape + " " + classes.square} >
              <div className={classes.contentShape}>
                Test
              </div>
            </div>
          </Grid>
          <Grid className={classes.avatarBig} item xs={3}>
            <div className={classes.shape + " " + classes.square} >
              <div className={classes.contentShape}>
                Test
              </div>
            </div>
          </Grid>
          <Grid className={classes.avatarBig} item xs={3}>
            <div className={classes.shape + " " + classes.square} >
              <div className={classes.contentShape}>
                Test
              </div>
            </div>
          </Grid>
          <Grid className={classes.avatarBig} item xs={3}>
            <div className={classes.shape + " " + classes.square} >
              <div className={classes.contentShape}>
                Test
              </div>
            </div>
          </Grid>
          <Grid className={classes.avatarBig} item xs={3}>
            <div className={classes.shape + " " + classes.square} >
              <div className={classes.contentShape}>
                Test
              </div>
            </div>
          </Grid>
          <Grid className={classes.avatarBig} item xs={3}>
            <div className={classes.shape + " " + classes.square} >
              <div className={classes.contentShape}>
                Test
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <BottomNavigation>
              <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Chat />
      </Grid>
    </Grid>
  );
}

export default Ready;