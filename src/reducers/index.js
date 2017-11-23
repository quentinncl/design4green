import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import DentistReduceur from './reducer_dentists';

const rootReducer = combineReducers({
    dentists:DentistReduceur,
    form:formReducer
});

export default rootReducer;
