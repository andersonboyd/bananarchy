import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Social/style.css";

const div = () => {
    return <div></div>
}

class Social extends Component {
    render(){
        return(
            <div className="social-box">
                <div className="link">
                    <a id="fb-icon" href="http://facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
                </div>
                <div className="link" id="ig">
                    <a as={div} id="ig-icon" href="http://instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-gradient" icon={["fab", "instagram"]} /></a>
                </div>
                <div className="link">
                    <a id="tw-icon" href="http://twitter.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </div>
                <div className="link">
                    <a id="yp-icon" href="http://yelp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "yelp"]} /></a>
                </div>
            </div>
        )
    };
};

export default Social;