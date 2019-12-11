import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AlertBox from "../components/AlertBox";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const wrapStyle = {
    width: "85%",
    margin: "0 auto",
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: "white",
    borderRadius: "3px"
}

class Cart extends Component {

    render(){
        return(
            <div>
                <Nav />
                <Header />
                <div style={wrapStyle}>
                    <Container fluid>
                        <AlertBox />
                        <h4 style={{textAlign: "center"}}>Cart</h4>
                        <Content />
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Cart;