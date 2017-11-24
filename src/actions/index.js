import axios from 'axios';

export const FETCH_DENTISTS_LASTNAME = 'FETCH_DENTISTS_LASTNAME';
export const FETCH_DENTISTS_CITY = 'FETCH_DENTISTS_CITY';

const ROOT_URL = 'http://127.0.0.1:5001/api';

export function fetchDentistsLastName(lastname){

    const request = axios.get(`${ROOT_URL}/dentists/last_name/${lastname.lastname}`);

    return {
        type: FETCH_DENTISTS_LASTNAME,
        payload: request
    }
}

export function fetchDentistsCity(city){

    const request = axios.get(`${ROOT_URL}/dentists/city/${city.city}`);

    return {
        type: FETCH_DENTISTS_CITY,
        payload: request
    }
}

