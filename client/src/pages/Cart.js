import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AlertBox from "../components/AlertBox";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

class Cart extends Component {

    render(){
        return(
            <div>
                <Nav />
                <Header />
                <Container fluid>
                    <AlertBox />
                    <h4 style={{textAlign: "center"}}>Cart</h4>
                    <Content />
                </Container>
                <Footer />
            </div>
        );
    }

}

export default Cart;