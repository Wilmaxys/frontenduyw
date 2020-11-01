import React, {Component} from 'react';
import styles from './sidebar.css';
import Drawer from '@material-ui/core/Drawer';
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
                {this.props.children}
            </Drawer>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Siderbar);