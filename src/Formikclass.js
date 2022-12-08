import { Formik } from 'formik';
import React, { Component } from 'react'

export default class Formikclass extends Component {

    constructor(props) {
        
        super(props);

        this.initialValues = { name: "", email: "" };
    }

    validate(values) {
        let errors = {};
        if (!values.name) {
            errors.name = "required";
        }

        if (!values.email) {
            errors.email = "required";
        }
        return errors;
    }
    submit(values, setSubmitting) {
        setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting = false;
        }, 400);
    }


    render() {
        return (
            <div>
                <h2> Formik class</h2>

                <Formik
                    initialValues={this.initialValues}
                    validate={values => this.validate(values)}
                    onSubmit={(values, { setSubmitting }) => {
                        this.handleSubmit(values, setSubmitting);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handlChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            Name
                            <input type="text" id='name' name='name' onChange={handlChange} onBlur={handleBlur} values={values.name} />
                            <span className='error'>{errors.name && touched.name && errors.name}</span>

                            Email
                            <input type="email" id='email' name='email' onChange={handlChange} onBlur={handleBlur} values={values.email} />
                            <span className='error'>{errors.email && touched.email && errors.email}</span>

                            <input type="submit" value="Submit" disabled={isSubmitting} />

                        </form>
                    )}
                </Formik>

            </div>
        )
    }
}
