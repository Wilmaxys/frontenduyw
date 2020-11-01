import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import styles from './login.css'
import AxiosService from '../../../security/service/AxiosService';
import { withStyles } from "@material-ui/core/styles";

class Login extends Component {

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
    AxiosService
          .executeJwtAuthenticationService(this.state.username, this.state.password)
          .then((response) => {
              AxiosService.registerSuccessfulLoginForJwt(this.state.username, response.data.accessToken);
              this.props.history.push(`/`);
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

  render() {
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
            Connexion
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              value={this.state.username} onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password} onChange={this.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Jouer
            </Button>
            <Grid container>
              <Grid item>
                <Link to={'/register'} variant="body2">
                  {"Vous n'avez pas de compte? Inscrivez-vous"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
  
}

export default withStyles(styles, { withTheme: true })(Login);