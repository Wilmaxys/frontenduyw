import React, { Component } from 'react';
import Sidebar from '../layout/sidebar/sidebar';
import Player from '../layout/sidebar/player';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from "@material-ui/core/styles";
import WrapContainer from '../layout/wrap/wrap-container';
import SizeableContainer from '../layout/sizeable-container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './home.css';
import PartyService from '../../../security/service/PartyService';
import { MainListItems } from '../layout/sidebar/list-items';
import AxiosService from '../../../security/service/AxiosService';
import { unsubscribeALL } from '../../../security/service/wsService';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      party: [],
      message: null,
      username: AxiosService.getLoggedInUserName()
    }
    this.refreshCourses = this.refreshCurrentParty.bind(this)
  }

  componentDidMount() {
    PartyService.unjoinAllParty(this.state.username)
      .then(
        response => {
          console.log("unjoin");
        }
      ).catch((reason) => {
        console.log(reason);
        //this.props.history.push(`/logout`);
      });

    unsubscribeALL();

    this.refreshCurrentParty();
  }

  refreshCurrentParty() {
    PartyService.retrieveAllParty()
      .then(
        response => {
          this.setState({ party: response.data })
        }
      ).catch((reason) => {
        this.props.history.push(`/logout`);
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <Sidebar>
          <List>
            <ListItem><Player username="Annie" /></ListItem>
          </List>
          <Divider />
          <MainListItems />
        </Sidebar>
        <WrapContainer>
          <SizeableContainer size={12}>
            <Button className={classes.mt4} variant="contained" color="primary" component={Link} to="/add">
              Ajouter
            </Button>
            <TableContainer className={classes.mt4} component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Accéder</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.party.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Button variant="contained" component={Link} to={"/ready/" + row.id}>Jouer</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </SizeableContainer>
        </WrapContainer>
      </>
    );
  }

}

export default withStyles(styles, { withTheme: true })(Home);