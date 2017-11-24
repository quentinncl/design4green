import {FETCH_DENTISTS} from "../actions";

/**
 * Reducer which will listen and wait the action from API
 * @param state
 * @param action
 * @returns {{}}
 */
export default function(state = {}, action){
    switch (action.type){
        case FETCH_DENTISTS:{
            return action.payload.data;
        }
        default:
            return state;
    }
}