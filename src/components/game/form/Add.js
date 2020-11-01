import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import PartyService from '../../../security/service/PartyService';
import styles from './Add.css';

class Add extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        PartyService.createParty(this.state.name).then(() => {
            this.props.history.push(`/`);
        });
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
            <Container component="main">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <SportsEsportsIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Créer une nouvelle partie
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            value={this.state.name} onChange={this.handleChange}
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
                        <Button fullWidth
                            className={classes.mt4}
                            variant="contained"
                            color="primary"
                            component={Link} to="/">
                            Retour
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }

}

export default withStyles(styles, { withTheme: true })(Add);