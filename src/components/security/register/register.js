import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './register.css';
import AuthenticationService from '../../../security/service/AuthenticationService';

class Register extends Component {

  constructor(props) {
    super();
    
    this.state = {
        username: '',
        password: '',
        hasLoginFailed: false,
        showSuccessMessage: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.username, this.state.password)
   
    AuthenticationService
          .executeJwtRegisterService(this.state.username, this.state.password)
          .then((response) => {
              console.log(this.state.username, this.state.password)
              this.props.history.push(`/login`)
          }).catch(() => {
              this.setState({ showSuccessMessage: false })
              this.setState({ hasLoginFailed: true })
          })

    event.preventDefault();
  }

  handleChange(event) {
      this.setState(
          {
              [event.target.name]
                  : event.target.value
          }
      )
  }

  render(){
    const { classes } = this.props;
    return (
        <Container component="main" maxWidth="xs">
          {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
          {this.state.showSuccessMessage && <div>Login Sucessful</div>}
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inscription
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={this.state.username} onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={this.state.password} onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                S'inscrire
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to={'/login'} variant="body2">
                    Vous avez déjà un compte ? Connectez-vous
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
  );
}
  
}

export default withStyles(styles, { withTheme: true })(Register);