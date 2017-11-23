import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {connect} from 'react-redux';

class Result extends Component {

    constructor(props) {
        super(props);

        this.state={specialties:[
            {id:0, label:"Pediatric Dentistry"},
            {id:1, label:"Unknown"},
            {id:2, label:"Oral and Maxillofacial Radiology"},
            {id:3, label:"Endodontics"},
            {id:4, label:"Dental Public Health"},
            {id:5, label:"Periodontics"},
            {id:6, label:"Oral and Maxillofacial Pathology"},
            {id:7, label:"Oral and Maxillofacial Surgery"},
            {id:8, label:"Prosthodontics"},
            {id:9, label:"Orthodontics and Dentofacial Orthopedics"}
        ]};
    }

    render() {

        const fullName = this.props.data.first_name + " " + this.props.data.last_name;
        const currDay = (new Date()).getDay();
        let currDayOpenings = "Today : ";
        let openings = "";

        if (!(this.props.data.openings == "Unknown")) {

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

            openings = [{day:"Monday", value:this.props.data.openings.substring(0, 2) + ":00 - " + this.props.data.openings.substring(2, 4) + ":00"},
                {day:"Tuesday", value:this.props.data.openings.substring(5, 7) + ":00 - " + this.props.data.openings.substring(7, 9) + ":00"},
                {day:"Wednesday", value:this.props.data.openings.substring(10, 12) + ":00 - " + this.props.data.openings.substring(12, 14) + ":00"},
                {day:"Thursday", value:this.props.data.openings.substring(15, 17) + ":00 - " + this.props.data.openings.substring(17, 19) + ":00"},
                {day:"Friday", value:this.props.data.openings.substring(20, 22) + ":00 - " + this.props.data.openings.substring(22, 24) + ":00"}];

        } else {
            currDayOpenings += "Unknown";
            openings = [{day:"Monday", value:"Unknown"},
                {day:"Tuesday", value:"Unknown"},
                {day:"Wednesday", value:"Unknown"},
                {day:"Thursday", value:"Unknown"},
                {day:"Friday", value:"Unknown"}];
        }

        return (
            <Card>
                <CardHeader
                    title={fullName}
                    subtitle={this.state.specialties[this.props.data.specialty].label}
                    avatar=""
                />
                <CardText>
                    Address : {this.props.data.address} <br/>
                    City : {this.props.data.city} <br/>
                    Phone : {this.props.data.phone} <br/>
                    Mail : {this.props.data.email}
                </CardText>
                <CardHeader
                    title="Openings"
                    subtitle={currDayOpenings}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {openings[0].day} : {openings[0].value} <br/>
                    {openings[1].day} : {openings[1].value} <br/>
                    {openings[2].day} : {openings[2].value} <br/>
                    {openings[3].day} : {openings[3].value} <br/>
                    {openings[4].day} : {openings[4].value}
                </CardText>

            </Card>
        )
    }
}



export default Result;