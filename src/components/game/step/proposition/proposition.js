import React, { Component } from 'react';
import styles from './proposition.css';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";

class Proposition extends Component {

  constructor(props) {
    super(props);

    this.state = {
      proposition: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }


  render() {
    const { classes } = this.props;
    return (
      <>
        <Container component="main">
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/images/11233-Sans%20titre-1.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Faites votre propostion
                    </Typography>
                <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="proposition"
                    label="Proposition"
                    name="proposition"
                    autoComplete="proposition"
                    autoFocus
                    value={this.state.proposition} onChange={this.handleChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Envoyer
                        </Button>
                </form>
              </div>
            </CardContent>
          </Card>

        </Container>
      </>
    );
  }

}

export default withStyles(styles, { withTheme: true })(Proposition);