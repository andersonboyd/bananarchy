import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import "../Carousel/style.css";
import slides from "../../API/slides.json";

class HomeCarousel extends Component {
    render(){
        return(
            <Carousel className="home">
                {
                    slides.map(slide =>
                    <Carousel.Item className="slide" key={slide.id}>
                        <img
                        className="d-block w-100"
                        src={slide.img}
                        alt={slide.alt}
                        />
                    </Carousel.Item>    
                    )
                }
            </Carousel>
        );
    }
}

export default HomeCarousel;