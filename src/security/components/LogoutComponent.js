import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../service/AuthenticationService';

class LogoutComponent extends Component {
    constructor(props) {
        AuthenticationService.logout();
        window.location.reload(false);
    }
}

export default LogoutComponent