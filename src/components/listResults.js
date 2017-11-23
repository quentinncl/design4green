import React, {Component} from 'react';
import Result from "./result";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ListResults extends Component {

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