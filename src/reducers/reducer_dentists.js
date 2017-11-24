import {FETCH_DENTISTS} from "../actions";

export default function(state = {}, action){
    switch (action.type){
        case FETCH_DENTISTS:{
            return action.payload.data;
        }
        default:
            return state;
    }
}