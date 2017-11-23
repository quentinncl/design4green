import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from "../actions/index";
import Form from './form';

class App extends Component {

    render(){
        return(
            <Form/>
        );
    }
}

export default App;