import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import DentistReduceur from './reducer_dentists';

/**
 * Part of Redux Patern.
 * Will stored in client part.
 * @type {Reducer<any>}
 */
const rootReducer = combineReducers({
    dentists:DentistReduceur,
    form:formReducer
});

export default rootReducer;
