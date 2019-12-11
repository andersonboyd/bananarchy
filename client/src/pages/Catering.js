import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AlertBox from "../components/AlertBox";
import Nav from "../components/Nav";
import HomeCarousel from "../components/Carousel";
import Header from "../components/Header";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

class Catering extends Component {

    render(){
        return(
            <div>
                <Nav />
                <Header />
                <Container fluid>
                    <AlertBox />
                    <h4 style={{textAlign: "center"}}>Catering</h4>
                    <HomeCarousel />
                    <br />
                    <div className="catering-info" style={{textAlign: "center"}}>
                        <h5>Yes! Catering! We’ll bring bananas to you!</h5>
                        <br />
                        <p>We dip frozen bananas to order at corporate events, weddings, birthday parties, food festivals, friendly get-togethers, political rallies, and revolutionary protests, to name a few. 
                            We’ll even be happy to provide yummy treats when you and your radical malcontent buddies get together to share stories of fomenting rebellion!</p>
                        <br />
                        <p>To learn more, just email <strong>catering@bananarchy.net.</strong> If you have a promotional code, please put that in the subject line.</p>
                    </div>
                <Reviews />
                </Container>
                <Footer />
            </div>
        );
    }

}

export default Catering;