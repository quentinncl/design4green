import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {connect} from 'react-redux';

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    render() {

        const fullName = this.props.data.first_name + " " + this.props.data.last_name;
        const currDay = (new Date()).getDay();
        let currDayOpenings = "Today : ";

        if (!this.props.data.openings == "Unknown") {

            switch (currDay) {
                case 1:
                    currDayOpenings += this.props.data.openings.substring(0, 2) + ":00 - " + this.props.data.openings.substring(2, 4) + ":00";
                    break;
                case 2:
                    currDayOpenings += this.props.data.openings.substring(5, 7) + ":00 - " + this.props.data.openings.substring(7, 9) + ":00";
                    break;
                case 3:
                    currDayOpenings += this.props.data.openings.substring(10, 12) + ":00 - " + this.props.data.openings.substring(12, 14) + ":00";
                    break;
                case 4:
                    currDayOpenings += this.props.data.openings.substring(15, 17) + ":00 - " + this.props.data.openings.substring(17, 19) + ":00";
                    break;
                case 5:
                    currDayOpenings += this.props.data.openings.substring(20, 22) + ":00 - " + this.props.data.openings.substring(22, 24) + ":00";
                    break;
                default:
                    currDayOpenings = "Closed";
                    break;
            }
        } else {
            currDayOpenings += "Unknown";
        }

        return (
            <Card>
                <CardHeader
                    title={fullName}
                    subtitle={this.props.data.speciality}
                    avatar="images/ok-128.jpg"
                />
                <CardText>
                        Phone : {this.props.data.phone} <br/>
                        Address : {this.props.data.address} <br/>
                        City : {this.props.data.city}
                </CardText>
                <CardHeader
                    title="Openings"
                    subtitle={currDayOpenings}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    Monday : {this.props.data.openings.substring(0,2)}:00 - {this.props.data.openings.substring(2,4)}:00<br/>
                    Tuesday : {this.props.data.openings.substring(5,7)}:00 - {this.props.data.openings.substring(7,9)}:00<br/>
                    Wednesday : {this.props.data.openings.substring(10,12)}:00 - {this.props.data.openings.substring(12,14)}:00<br/>
                    Thursday : {this.props.data.openings.substring(15,17)}:00 - {this.props.data.openings.substring(17,19)}:00<br/>
                    Friday : {this.props.data.openings.substring(20,22)}:00 - {this.props.data.openings.substring(22,24)}:00
                </CardText>

            </Card>
        )
    }
}



export default Result;