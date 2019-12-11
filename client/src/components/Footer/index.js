import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Form from "../Form";
import Social from "../Social";
import "../Footer/style.css";

class Footer extends Component {
    state = {
        email: ""
    }

    handleChange = event => {
        document.querySelector("input");
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render(){
        return (
            <Container fluid className="footer">
                <Form 
                    className="catering"
                    title="Catering" 
                    info="Email us to request catering information and quotes!"
                    email={this.state.email}
                    handleChange={event => this.handleChange(event)}
                />
                <Form 
                    className="signup"
                    title="Become a Bananarchist!" 
                    info="Sign up for updates about Bananarchy specials, off-season openings, and more!"
                    email={this.state.email}
                    handleChange={event => this.handleChange(event)}
                />
                <Social />
            </Container>
        )
    }
}

export default Footer;