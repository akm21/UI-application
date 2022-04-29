import axios from 'axios';

const TECH_API_BASE_URL = "http://localhost:8080/techs/tech";

class TechService {

    getTechs(){
        return axios.get(TECH_API_BASE_URL);
    }
    createTech(tech){
        return axios.post(TECH_API_BASE_URL,tech);
    }
    getTechById(techId){
        return axios.get(TECH_API_BASE_URL + '/' + techId);
    }
    updateTech(tech, techId){
        return axios.put(TECH_API_BASE_URL + '/' + techId, tech);
    }
    deleteTech(techId){
        return axios.delete(TECH_API_BASE_URL + '/' + techId);
    }
}

export default new TechService()