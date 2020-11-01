import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AxiosService, {tokenSaved} from '../service/AxiosService';

class AuthenticatedRoute extends Component {
    render() {
        //sessionStorage.removeItem('authenticatedUser');
//
        //return (<div>{AxiosService.isUserLoggedIn().toString()}</div>);

        if (AxiosService.isUserLoggedIn() && tokenSaved !== "test") {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }

    }
}

export default AuthenticatedRoute