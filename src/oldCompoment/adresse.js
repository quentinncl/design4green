/**
 * Created by Mélanie GEFFRE on 22/11/2017.
 */
import React, {Component} from 'react';

class Adresse extends Component{
    constructor(props){
        super(props);

        this.state={num:'171',rue:'rue de Coureilles',ville:'La Rochelle',codePostal:'17000'};
    }

    render(){
        return(
            <div>
                <p>{this.num} {this.rue}, {this.codePostal} {this.ville}</p>
            </div>
        );
    }
}

export default Adresse;