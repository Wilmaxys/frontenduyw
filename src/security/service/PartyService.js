import axios from 'axios';
import { tokenSaved, API_URL } from './AxiosService';

class CourseDataService {

    retrieveAllParty(name) {
        return axios.get(`http://localhost:8080/games/all`, { headers: { 'Authorization': tokenSaved } });
    }

    joinParty(idGame, username) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': tokenSaved
        }

        return axios.post(`http://localhost:8080/games/${idGame}/join`,
            {
                idGame,
                username
            }, 
            {
                headers: headers
            }
        );
    }

    createParty(name) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': tokenSaved
        }

        console.log(tokenSaved);

        return axios.post(`http://localhost:8080/games/create`,
            {
                name
            }, 
            {
                headers: headers
            }
        );
    }

    unjoinAllParty(username) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': tokenSaved
        }

        return axios.post(`http://localhost:8080/games/unjoinAll`,
            {
                username
            }, 
            {
                headers: headers
            }
        );
    }
}

export default new CourseDataService()