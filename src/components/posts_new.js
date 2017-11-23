import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchDentistsLastName} from '../actions/index';


class PostsNew extends Component {

    renderField(field) {

        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label} </label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.fetchDentistsLastName(values);
    }

    render() {
        const {handleSubmit} = this.props;
        //this.props -> ensemble de propriété données par reduxForm
        //console.log(this.props);
        return (<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Last Name"
                        name="lastname"
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
        errors.lastname = "Enter a title that is at least 3 characters";
    }

    return errors;
    //if we return an empty object : all is good
    //else we return the erros
}


function mapStateToProps({dentist}){
    return {dentist:dentist};
}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(
    connect(mapStateToProps,{ fetchDentistsLastName })(PostsNew)
);