import _ from 'lodash';
import {FETCH_POSTS} from "../actions";

export default function(state = {}, action){
    switch (action.type){
        case FETCH_POSTS:
            /*
                mapKeys va permettre d'extraire l'ID définit
                dans posts et le mettre en tant que clé dans
                le JSON
             */
            return _.mapKeys(action.payload.data,'id');

        default:
            return state;
    }
}