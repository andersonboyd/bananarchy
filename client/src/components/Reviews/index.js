import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

class Reviews extends Component {
    render(){
        return(
            <div className="reviewBlock clearfix">
                <Accordion className="reviews">
                    <Card style={{textAlign: "center"}}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} className="hed" variant="link" eventKey="0">
                                Reviews
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>Um... YUMMMMM! We had Bananarchy cater a treat for our office - everything was great from communication, arrival time, setup, and the covered bananas!</p>
                                <FontAwesomeIcon icon={["fab", "yelp"]} style={{color: "red"}}/><h5>Lauren P.</h5>
                                <br />
                                <p>Bananarchy catered the dessert at my son's rehearsal dinner. The bananas were delicious and Anslee did a fabulous job making every guest's dessert to their liking. It was fun to give the out of town guests a taste of the Austin food truck scene!​</p>
                                <FontAwesomeIcon icon={["fab", "facebook"]} style={{color: "darkblue"}}/><h5>Beth B.</h5>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Button variant="primary" size="lg" href="mailto:catering@bananarchy.net" className="quote">
                    Contact us now to get a quote!
                </Button>
            </div>
        )
    }
}

export default Reviews;