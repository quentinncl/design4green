import {FETCH_DENTISTS_LASTNAME, FETCH_DENTISTS_CITY} from "../actions";

export default function(state = {}, action){
    console.log(action);
    switch (action.type){
        case FETCH_DENTISTS_LASTNAME:{
            return action.payload.data;
        }
        case FETCH_DENTISTS_CITY: {
            return action.payload.data;
        }
        default:
            return state;
    }
}