import React, {Component} from 'react';
import Result from "./result";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ListResults extends Component {

    constructor (props) {
        super(props);

        this.state={results:[
            {firstName:"Mélanie", lastName:"GEFFRE", speciality:"Parodontie", phone:"06.67.38.29.41", address:"1, rue de la Rêverie", city:"La Rochelle", openings:"0919:0919:0913:0818:0818"},
            {firstName:"Jordan", lastName:"CALANDRE", speciality:"Odondotie", phone:"06.67.38.29.42", address:"2, rue de la Rêverie", city:"La Rochelle", openings:"0718:0718:0712:0718:0718"},
            {firstName:"Quentin", lastName:"NICOLLE", speciality:"Pediatrie", phone:"06.67.38.29.43", address:"3, rue de la Rêverie", city:"La Rochelle", openings:"0819:0819:0813:0919:0917"},
            {firstName:"Jean-Baptiste", lastName:"PINET", speciality:"Parodontie", phone:"06.67.38.29.44", address:"4, rue de la Rêverie", city:"La Rochelle", openings:"0918:0918:0917:0818:0818"}
        ]};
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    {this.state.results.map(function(result) {
                        return (<Result key={result.lastName} data={result}/>);
                    })}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default ListResults;