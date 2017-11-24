import axios from 'axios';

export const FETCH_DENTISTS = 'FETCH_DENTISTS';

const ROOT_URL = 'http://51.254.37.175:8181/api';

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

