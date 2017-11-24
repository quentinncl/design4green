import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Cookies from 'universal-cookie';

/**
 * Component for each result to a request.
 */
class Result extends Component {

    /**
     * Constructor.
     * @param props
     */
    constructor(props) {
        super(props);

        //List of specialties, to show it dynamically in the results.
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

        this.setCookie = this.setCookie.bind(this);

        const cookies = new Cookies();

        if (cookies.get('dentists') == undefined) {
            cookies.set('dentists', "", { path: '/' });
        }
    }

    /**
     * Method to build cookie, where we keep the dentists who have been contacted by the user.
     */
    setCookie() {
        const cookies = new Cookies();
        let cookie = cookies.get('dentists');

        cookie = cookie + this.props.data.email + ";";
        cookies.set('dentists', cookie, { path: '/' });
    }

    /**
     * Render method (compulsory)
     * @returns {XML} the HTML element.
     */
    render() {
        const cookies = new Cookies();
        let fullName = "";

        if (cookies.get('dentists').indexOf(this.props.data.email) == -1) {
            fullName = this.props.data.first_name + " " + this.props.data.last_name;
        } else {
            fullName = this.props.data.first_name + " " + this.props.data.last_name + " - Contacted before";
        }

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
                    avatar={this.props.data.image}
                />
                <CardText>
                    Address : {this.props.data.address} <br/>
                    City : {this.props.data.city} <br/>
                    Phone : <a href={`tel:${this.props.data.phone}`} onClick={this.setCookie}>{this.props.data.phone}</a> <br/>
                    Mail : <a href={`mailto:${this.props.data.email}`} onClick={this.setCookie}>{this.props.data.email}</a>
                </CardText>
                <CardHeader
                    title="Openings"
                    subtitle={currDayOpenings}
                    actAsExpander={false}
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