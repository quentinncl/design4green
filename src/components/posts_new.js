import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {createPost} from '../actions/index';


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
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {

        const {handleSubmit} = this.props;
        //this.props -> ensemble de propriété données par reduxForm

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
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
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters";
    }
    if (!values.categories) {
        errors.categories = "Enter a categorie";
    }
    if (!values.content) {
        errors.content = "Enter a content";
    }

    return errors;
    //if we return an empty object : all is good
    //else we return the erros
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null,{ createPost })(PostsNew)
);