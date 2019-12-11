import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Social/style.css";

class Social extends Component {
    render(){
        return(
            <div className="social-box">
                <div className="link">
                    <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
                </div>
                <div className="link">
                    <a href="http://instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                </div>
                <div className="link">
                    <a href="http://twitter.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </div>
                <div className="link">
                    <a href="http://yelp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "yelp"]} /></a>
                </div>
            </div>
        )
    };
};

export default Social;