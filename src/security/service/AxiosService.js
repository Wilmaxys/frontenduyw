import axios from 'axios'

export const API_URL = 'http://localhost:8080'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
export let tokenSaved = "test";

class AxiosService {

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/api/auth/signin`, {
            username,
            password
        })
    }

    executeJwtRegisterService(username, password) {
        return axios.post(`${API_URL}/api/auth/signup`, {
            username,
            password
        })
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        tokenSaved = this.createJWTToken(token);
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }
}

export default new AxiosService();