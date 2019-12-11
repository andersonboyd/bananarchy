import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Nav from "../components/Nav";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

class Contact extends Component {

    render() {
        return (
            <div>
                <Nav />
                <Header />
                <Container fluid>
                <h4 style={{textAlign: "center"}}>Contact Us</h4>
                    <ContactForm />
                </Container>
                <Footer />
            </div>
        );
    }

}

export default Contact;