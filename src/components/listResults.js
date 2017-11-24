import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import Result from "./result";

class ListResults extends Component {

    render() {

        if (!this.props.dentists[0]) {
            return <div></div>
        } else {
            console.log(this.props.dentists);
            return (
                <MuiThemeProvider>
                    <div>
                        {this.props.dentists.map(function (result) {
                            return (<Result key={result.id} data={result}/>);
                        })}
                    </div>
                </MuiThemeProvider>
            )
        }
    }
}

function mapStateToProps({dentists}) {
    return {dentists: dentists}
}

export default connect(mapStateToProps)(ListResults);