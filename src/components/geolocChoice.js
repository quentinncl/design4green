/**
 * Created by Mélanie GEFFRE on 21/11/2017.
 */
import React, {Component} from 'react';

class GeolocChoice extends Component{
    render(){
        return(
            <div>
                <input type="Checkbox" id="geolocCheck"/>
                <label for="geolocCheck">Geolocalisation</label>
            </div>
        );
    }
}

export default GeolocChoice;
