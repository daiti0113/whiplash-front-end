import axios from 'axios';

const base_url = 'http://localhost:3001';

export default function requestAPI(method, endpoint, params = []) {
    let res = {};
    switch(method) {
        case 'GET':
            res = axios.get(base_url + endpoint);
            break;
        case 'POST':
        case 'PUT':
        case 'DELETE':
            res = "";
            break;
    }
    return res;
}

