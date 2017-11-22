import axios from 'axios';

export const FETCH_DENTISTS = 'FETCH_DENTISTS';
export const CREATE_DENTISTS = 'CREATE_DENTISTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=MYKEY2611';

export function fetchDentists(){

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_DENTISTS,
        payload: null
    }
}

export function createDentists(values, callback){

    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(()=> callback());

    return{
        type: CREATE_DENTISTS,
        payload:null
    }
}