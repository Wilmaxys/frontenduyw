import React, {Component} from 'react';
import {mainListItems, secondaryListItems} from './list-items';
import styles from './sidebar.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { withStyles } from "@material-ui/core/styles";

class Siderbar extends Component {

    render () {
        
        const { classes } = this.props;
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                open={true}
            >
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Siderbar);