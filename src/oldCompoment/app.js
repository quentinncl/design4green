import React, { Component } from 'react';
import LocationInput from './locationInput';
import ServiceChoiceList from './serviceChoiceList';
import GeolocChoice from './geolocChoice';
import SearchButton from './searchButton';
import ResultLine from './resultLine';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>At your service !</h1>
                <ServiceChoiceList />
                <GeolocChoice/>
                <LocationInput libelle="Code Postal"/>
                <LocationInput libelle="Ville"/>
                <SearchButton/>
                <p>-----------------------------------------------------------------</p>
                <ResultLine/>
            </div>
    );
  }
}