import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AlertBox from "../components/AlertBox";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

const imgStyle = {
    width: "inherit"
}

class Home extends Component {

    render(){
        return(
            <div>
                <Nav />
                <Header />
                <Container fluid>
                    <AlertBox />
                    <h4 style={{textAlign: "center"}}>Welcome!</h4>
                    <p style={{textAlign: "center"}}>We are Austin's only frozen banana stand, operating out of two trailers and offering catering year-round!</p>
                    <hr />
                    <img style={imgStyle} src="http://bananarchy.net/blog/wp-content/uploads/2017-05-27-18.32.13-3-1024x768.jpg" alt="bananas"/>
                </Container>
                <Footer />
            </div>
        );
    }

}

export default Home;