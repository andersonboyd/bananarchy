import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertBox = () => {
    return (
        <Alert variant="primary" style={{textAlign: "center"}}>
            <Alert.Heading>We're closed!</Alert.Heading>
            <p className="mb-0">Our trucks are closed for the winter! Please click <a href="mailto:catering@bananarchy.net">here</a> to request catering information. We'll open once again in the spring!</p>
        </Alert>
    )
}

export default AlertBox;