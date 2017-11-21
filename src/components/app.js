import React, { Component } from 'react';
import LocationInput from './locationInput';
import ServiceChoiceList from './serviceChoiceList';

export default class App extends Component {
    render() {
        return (
            <div>
                <ServiceChoiceList />
                <LocationInput libelle="Code Postal"/>
                <LocationInput libelle="Ville"/>
            </div>
    );
  }
}