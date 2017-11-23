import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormDentists from './form';
import ListResults from "./listResults";

class App extends Component {

    render(){
        return(
            <div class="container">
                <h1>Adopte Un Dentiste</h1>
                <h3> Trouvez le dentiste qui vous correspond ! </h3>
                <FormDentists/>
                <p>----------------------------------</p>
                <ListResults/>
            </div>
        );
    }
}

export default App;