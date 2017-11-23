import React, {Component} from 'react';
import {connect} from 'react-redux';


class Result extends Component {

    render() {
        if (!this.props.dentists[0]) {
            return <div>Loading...</div>
        } else {
            //console.log(this.props.dentists[0].email);
            return <div>Hello {this.props.dentists[0].email}</div>
        }
    }

}

function mapStateToProps({dentists}) {
    return {dentists: dentists}
}

export default connect(mapStateToProps)(Result);