import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Marker/style.css";

const Marker = ({ link, text }) => (
    <div className="markBox">
        <FontAwesomeIcon icon="map-marker-alt" className="marker" />
        <div className="infoBox">
            <a href={link} target="_blank" rel="noopener noreferrer">{ text }</a>
        </div>
    </div>
);

export default Marker;