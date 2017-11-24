import axios from 'axios';

export const FETCH_DENTISTS = 'FETCH_DENTISTS';

/**
 * variable with the address of the Python API
 * @type {string}
 */
const ROOT_URL = 'http://51.254.37.175:8181/api';

/**
 * Action which ask to API informations we need
 * Dynamical construction of the URL
 * @param data
 * @returns {{type: string, payload: AxiosPromise<any>}}
 */

export function fetchDentists(data){
    let temp="";
    Object.keys(data).forEach((key)=> {

            if(data[key])
                temp+="/"+key+"/"+data[key]
        });


    const request = axios.get(`${ROOT_URL}/dentists${temp}`);

    return {
        type: FETCH_DENTISTS,
        payload: request
    }
}

