/**
 * Created by Mélanie GEFFRE on 20/11/2017.
 */
import React, {Component} from 'react';

class LocationInput extends Component {
    constructor(props){
        super(props);
        this.state={term:''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
        alert("Change OK"+event.target.value);
    }

    render(){
        return(
            <div>
                <p>{this.props.libelle} : </p>
                <input
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default LocationInput;
