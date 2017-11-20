import React, { Component } from 'react';
import LocationInput from './locationInput';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter
        <LocationInput libelle="Code Postal"/>
        <LocationInput libelle="Ville"/>
      </div>
    );
  }
}
