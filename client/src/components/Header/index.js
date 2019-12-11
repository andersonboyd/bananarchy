import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import logo from "./logo.png";
import "../Header/style.css";

class Header extends Component {
    render(){
        return( 
        <div className="header">
            <Jumbotron fluid>
                <div className="logo-head">
                    <div className="image-div">
                        <img src={logo} alt="banana-logo" />
                    </div>
                    <div className="info-head">
                        <h1>Bananarchy</h1>
                        <h2>Revolutionary desserts</h2>
                    </div>
                </div>
            </Jumbotron>
        </div>
    )};
};

export default Header;