import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        validationSchema: Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        }),
        onSubmit: values => {
          console.log(values);
        },
      });
    return(
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationFormik01">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div>{formik.errors.firstName}</div>
                    ) : null}
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationFormik02">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                    ) : null}
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationFormik03">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="formGroupTextArea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form.Row>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default ContactForm;