import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Nav from "../components/Nav";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const wrapStyle = {
    width: "85%",
    margin: "0 auto",
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: "white",
    borderRadius: "3px"
}

class Contact extends Component {

    render() {
        return (
            <div>
                <Nav />
                <Header />
                <div style={wrapStyle}>
                    <Container fluid>
                        <h4 style={{textAlign: "center"}}>Contact Us</h4>
                        <ContactForm />
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Contact;