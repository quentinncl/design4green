import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostsReducteur from './reducer_posts';

const rootReducer = combineReducers({
    posts:PostsReducteur,
    form:formReducer
});

export default rootReducer;
