/**
 * Created by Mélanie GEFFRE on 21/11/2017.
 */
import React, {Component} from 'react';

class ResultLine extends Component{
    constructor(props){
        super(props);
        this.state={name:'Dominos',adresse:'Rue de la pizza',telephone:'05.46.00.00.00',horaires:'10h00 23h00'}
    }
    render(){
        return(
            <div>
                <h4>{this.state.name}</h4>
                <p>{this.state.adresse}</p>
                <p>{this.state.telephone}</p>
                <p>{this.state.horaires}</p>
                <a>Trouver sur la carte !</a>
            </div>
        );
    }
}

export default ResultLine;