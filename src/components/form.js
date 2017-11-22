import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {createDentists} from '../actions/index';


class FormDentists extends Component {

    constructor (props) {
        super(props);

        this.state={days:[{label:'Monday', value:'monday'},
            {label:'Tuesday', value: 'tuesday'},
            {label:'Wednesday', value:'wednesday'},
            {label:'Thursday', value:'thursday'},
            {label:'Friday', value:'friday'},
            {label:'Saturday', value:'saturday'},
            {label:'Sunday', value:'sunday'}]};
    }

    renderField(field) {

        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

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