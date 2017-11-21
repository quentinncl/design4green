/**
 * Created by Mélanie GEFFRE on 21/11/2017.
 */
import React, {Component} from 'react';

class ServiceChoiceList extends Component{
    constructor(props){
        super(props);
        this.state={listService:['Plombier','Pizzeria','Boulangerie']}
    }

    renderService(){
        return this.state.listService.map(function(service){
            return (
                <option value={service}>{service}</option>
            );
        });
    }

    render(){
        return(
            <div>
                <h1>Service recherché : </h1>
                <select>
                    {this.renderService()}
                </select>
            </div>
        );
    }
}

export default ServiceChoiceList;