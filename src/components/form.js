import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {fetchDentists} from '../actions/index';

import ListResult from './listResults';

class FormDentists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            specialties: [
                {'id': 0, 'value': 'Pediatric Dentistry'},
                {'id': 2, 'value': 'Oral and Maxillofacial Radiology'},
                {'id': 3, 'value': 'Endodontics'},
                {'id': 4, 'value': 'Dental Public Health'},
                {'id': 5, 'value': 'Periodontics'},
                {'id': 6, 'value': 'Oral and Maxillofacial Pathology'},
                {'id': 7, 'value': 'Oral and Maxillofacial Surgery'},
                {'id': 8, 'value': 'Prosthodontics'},
                {'id': 9, 'value': 'Orthodontics and Dentofacial Orthopedics'},
                {'id': 1, 'value': 'Unknown'}
            ]
        };

        this.renderField = this.renderField.bind(this);
    }

    renderField(field) {
        const className = `form-group`;

        return (
            <div className={className}>
                <label>{field.label} </label>
                <input
                    className="form-control"
                    type={field.type}
                    value=" "
                    {...field.input}
                />
            </div>
        )
    }

    onSubmit(values) {
        this.props.fetchDentists(values);
    }

    render() {

        const {handleSubmit} = this.props;

        return (
            <div>
                <h1>Adopte un dentiste !</h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Last Name"
                        name="last_name"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="City"
                        name="city"
                        type="text"
                        component={this.renderField}
                    />
                    <div className="form-group">
                        <label>Specialty</label>
                        <Field
                            className="form-control custom-select"
                            label="Specialty"
                            name="specialty"
                            component="select">
                            {
                                this.state.specialties.map((specialty) => {
                                    return (
                                        <option value={specialty.id}>{specialty.value}</option>
                                    )
                                })
                            }
                        </Field>
                    </div>

                    {/*<Field
                        label="Openings"
                        name="openings"
                        type="date"
                        component={this.renderField}
                    />*/}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <ListResult/>
            </div>
        )
    }
}

export default reduxForm({
    form: 'PostNewForm',
    initialValues: {
        lastname: '',
        city: '',
        speciality: '',
        openings: ''
    }
})(
    connect(null, {fetchDentists})(FormDentists)
);