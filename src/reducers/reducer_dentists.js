import {FETCH_DENTISTS_LASTNAME} from "../actions";

export default function(state = {}, action){
    switch (action.type){
        case FETCH_DENTISTS_LASTNAME:
            return action.payload.data;

        default:
            return state;
    }
}