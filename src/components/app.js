import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from "../actions/index";
import Form from './form';

class App extends Component {

    render(){
        return(
            <div>
                <h1>Adopte Un Dentiste</h1>
                <h2> Trouvez le dentiste qui vous correspond ! </h2>
                <Form/>
            </div>
        );
    }
}

export default App;