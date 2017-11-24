import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import Result from "./result";

/**
 * Component for the list of dentists found.
 */
class ListResults extends Component {

    /**
     * Render method (compulsory).
     * @returns {XML} the HTML element.
     */
    render() {

        if (!this.props.dentists[0]) {
            return <div></div>
        } else {
            console.log(this.props.dentists);
            return (
                <MuiThemeProvider>
                    <div>
                        {this.props.dentists.map(function (result) {
                            //Build of the elements of the list.
                            return (<Result key={result.id} data={result}/>);
                        })}
                    </div>
                </MuiThemeProvider>
            )
        }
    }
}

/**
 * Method to associate Redux state to local props.
 * @param dentists
 * @returns {{dentists: *}}
 */
function mapStateToProps({dentists}) {
    return {dentists: dentists}
}

export default connect(mapStateToProps)(ListResults);