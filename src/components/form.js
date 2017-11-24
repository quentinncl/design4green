import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import {connect} from 'react-redux';
import {fetchDentistsLastName} from '../actions/index';

import ListResult from './listResults';

class FormDentists extends Component {
    constructor(props) {
        super(props);

        this.renderField = this.renderField.bind(this);
    }
    
    renderField(field) {
        const className = `form-group`;

        if (field.label == "Speciality") {
            return (
                <div className={className}>
                    <label>{field.label} </label>
                    <select className="form-control custom-select">
                        <option selected>Select a speciality</option>
                        <option value="0">Pediatric Dentistry</option>
                        <option value="2">Oral and Maxillofacial Radiology</option>
                        <option value="3">Endodontics</option>
                        <option value="4">Dental Public Health</option>
                        <option value="5">Periodontics</option>
                        <option value="6">Oral and Maxillofacial Pathology</option>
                        <option value="7">Oral and Maxillofacial Surgery</option>
                        <option value="8">Prosthodontics</option>
                        <option value="9">Orthodontics and Dentofacial Orthopedics</option>
                        <option value="1">Unknown</option>
                    </select>
                </div>
            );
        }
        else {
            return (
                <div className={className}>
                    <label>{field.label} </label>
                    <input
                        className="form-control"
                        type={field.type}
                        {...field.input}
                    />
                </div>
            )
        }
    }

    onSubmit(values) {
        this.props.fetchDentistsLastName(values);
    }

    render() {

        const {handleSubmit} = this.props;
        //this.props -> ensemble de propriété données par reduxForm

        return (
            <div>
                <h1>Adopte un dentiste !</h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Last Name"
                        name="lastname"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="City"
                        name="city"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Speciality"
                        name="speciality"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Openings"
                        name="openings"
                        type="date"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <ListResult/>
            </div>
        )
    }
}

function validate(values) {
    //console.log(values) -> {title: blabla, categories: blabla, content: blabla}
    const errors = {};

    //Validate the input from values
    if (!values.lastname || values.lastname.length < 3) {
        errors.lastname = "Enter a lastname that is at least 3 characters";
    }
    if (!values.cities) {
        errors.cities = "Enter a city";
    }

    return errors;
    //if we return an empty object : all is good
    //else we return the errors
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null, {fetchDentistsLastName})(FormDentists)
);