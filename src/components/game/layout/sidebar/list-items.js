import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom';

export const MainListItems = () => {
    return (
        <div>
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Liste des parties" />
            </ListItem>
            <ListItem button component={Link} to="/ready/1/test1">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Test" />
            </ListItem>
            <ListItem button component={Link} to="/ready/1/test2">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Test2" />
            </ListItem>
            <ListItem button component={Link} to="/logout">
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Se déconnecter" />
            </ListItem>
        </div>
    )
};