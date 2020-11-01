import axios from 'axios';
import { tokenSaved } from './AxiosService';

class CourseDataService {

    retrieveAllParty(name) {
        return axios.get(`http://localhost:8080/games/all`, { headers: { 'Authorization': tokenSaved } });
    }

    retrieveAllPartyPlayers(id) {
        return axios.get(`http://localhost:8080/games/${id}/players`, { headers: { 'Authorization': tokenSaved } });
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