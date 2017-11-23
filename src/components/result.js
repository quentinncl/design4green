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

    renderOpenings() {
        if (this.props.openings == "Unknown") {
            return ("Monday : Unknown" + <br/> + " Tuesday : Unknown" + <br/> + "Wednesday : Unknown" + <br/> +
                "Thursday : Unknown" + <br/> + "Friday : Unknown" + <br/> + "Friday : Unknown");
        } else {
            return ("Monday : " + this.props.data.openings.substring(0, 2) + ":00 - " + this.props.data.openings.substring(2, 4) + ":00" + <br/>
                + "Tuesday : " + this.props.data.openings.substring(5, 7) + ":00 - " + this.props.data.openings.substring(7, 9) + ":00" + <br/>
                + "Wednesday : " + this.props.data.openings.substring(10, 12) + ":00 - " +  this.props.data.openings.substring(12, 14) + ":00" + <br/>
                + "Thursday : " + this.props.data.openings.substring(15, 17) + ":00 - " + this.props.data.openings.substring(17, 19) + ":00" + <br/>
                + "Friday : " + this.props.data.openings.substring(20, 22) + ":00 - " + this.props.data.openings.substring(22, 24) + ":00" + <br/>);
        }
    }

    render() {

        if (!this.props.dentists[0]) {
            return <div>Loading...</div>
        } else {
            //console.log(this.props.dentists[0].email);
            return <div>Hello {this.props.dentists[0].email}</div>
        }


        const fullName = this.props.data.firstName + " " + this.props.data.lastName;
        const currDay = (new Date()).getDay();
        var currDayOpenings = "Today : ";

        if (!this.props.data.openings.equals("Unknown")) {

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
                    Address : {this.props.data.address} <br/>
                    City : {this.props.data.city} <br/>
                    Phone : {this.props.data.phone} <br/>
                    Mail : {this.props.data.mail}
                </CardText>
                <CardHeader
                    title="Openings"
                    subtitle={currDayOpenings}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {this.renderOpenings}
                </CardText>

            </Card>
        )
    }
}

function mapStateToProps({dentists}) {
    return {dentists: dentists}
}

export default connect(mapStateToProps)(Result);