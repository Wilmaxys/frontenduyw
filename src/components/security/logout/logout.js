import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../../../security/service/AxiosService';

class LogoutComponent extends Component {
    constructor() {
        super();
        AuthenticationService.logout();
    }

    render() {
        return (<Redirect to="/login" />)
    }
}

export default LogoutComponent