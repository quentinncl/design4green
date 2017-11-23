import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {createDentists} from '../actions/index';


class FormDentists extends Component {

    renderField(field) {

        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        console.log(field.label);
        if (field.label=='Speciality'){
            return (
                <div className={className}>
                    <label>{field.label} </label>
                    <select className="form-control custom-select">
                        <option selected>Select a speciality</option>
                        <option value="0">Pediatric Dentistry</option>
                        <option value="2">Oral and Maxillofaciel Radiology</option>
                        <option value="3">Endodontics</option>
                        <option value="4">Dental Public Health</option>
                        <option value="5">Peridontics</option>
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
                    <div className="text-help">
                        {touched ? error : ""}
                    </div>
                </div>
            )
        }
    }

    /* OPTIMISATION */
    renderOptions() {
        return (
            this.state.days.map(function(day) {
               return <option value={day.value}>{day.label}</option>;
            })
        )
    }
    /****************/

    render() {

        //const {handleSubmit} = this.props;
        //this.props -> ensemble de propriété données par reduxForm

        return (
            <form>
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
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
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
        errors.cities = "Enter a categorie";
    }

    return errors;
    //if we return an empty object : all is good
    //else we return the errors
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null,{ createDentists })(FormDentists)
);