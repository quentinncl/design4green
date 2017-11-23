/**
 * Created by Mélanie GEFFRE on 21/11/2017.
 */
import React, {Component} from 'react';
import Adresse from './adresse';

class ResultLine extends Component{
    constructor(props){
        super(props);
        this.state={name:'Dominos',adresse:'Rue de la pizza',telephone:'05.46.00.00.00',horaires:'10h00 23h00'}
    }
    render(){
        return(
            <div>
                <h4>{this.state.name}</h4>
                <Adresse/>
                <p>{this.state.telephone}</p>
                <p>{this.state.horaires}</p> /** ça depend de la forme des données récupérables. */
                <a>Trouver sur la carte !</a>
            </div>
        );
    }
}

export default ResultLine;