import axios from 'axios';

export const FETCH_DENTISTS_LASTNAME = 'FETCH_DENTISTS_LASTNAME';

const ROOT_URL = 'http://51.254.37.175:5001/api';

export function fetchDentistsLastName(lastname){

    const request = axios.get(`${ROOT_URL}/dentists/last_name/${lastname.lastname}`, {
        headers: {
            'Access-Control-Allow-Origin':'*',
        },
        proxy: {
            host: '51.254.37.175',
            port: 8181
        }}).then(function (response) {
        console.log('response is : ' + response.data);
    }).catch(function (error) {
        if (error.response) {
            console.log(error.response.headers);
        }
        else if (error.request) {
            console.log(error.request);
        }
        else {
            console.log(error.message);
        }
        console.log(error.config);
    });

    return {
        type: FETCH_DENTISTS_LASTNAME,
        payload: request
    }
}