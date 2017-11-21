import React, { Component } from 'react';
import LocationInput from './locationInput';
import ServiceChoiceList from './serviceChoiceList';
import GeolocChoice from './geolocChoice';
import SearchButton from './searchButton';

export default class App extends Component {
    render() {
        return (
            <div>
                <ServiceChoiceList />
                <GeolocChoice/>
                <LocationInput libelle="Code Postal"/>
                <LocationInput libelle="Ville"/>
                <SearchButton/>
            </div>
    );
  }
}