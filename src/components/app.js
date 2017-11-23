import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from './form';
import ListResults from "./listResults";

class App extends Component {

    render(){
        return(
            <div>
                <h1>Adopte Un Dentiste</h1>
                <h2> Trouvez le dentiste qui vous correspond ! </h2>
                <Form/>
                <p>--------------------------------------------</p>
                <ListResults/>
            </div>
        );
    }
}

export default App;