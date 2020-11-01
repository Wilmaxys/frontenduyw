import axios from 'axios';
import { tokenSaved, API_URL } from './AxiosService';

class CourseDataService {

    retrieveAllParty(name) {
        console.log(tokenSaved);
        return axios.get(`http://localhost:8080/games/all`, { headers: { 'Authorization': tokenSaved } });
    }

    joinParty(id, username) {
        console.log(tokenSaved);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': tokenSaved
        }

        return axios.post(`http://localhost:8080/games/1/join`,
            {
                id,
                username
            }, 
            {
                headers: headers
            }
        );
    }
}

export default new CourseDataService()