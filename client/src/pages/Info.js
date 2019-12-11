import React, { Component, Fragment } from "react";
import { Container, Accordion, Card, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AlertBox from "../components/AlertBox";
import Nav from "../components/Nav";
import Header from "../components/Header";
import GoogleMap from "../components/GoogleMap";
import Accord from "../components/Accordion";
import Marker from "../components/Marker";
import Footer from "../components/Footer";

const HoursOverlay = props => (
        <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
                <Popover id={`popover-positioned-bottom`}>
                    <Popover.Title as="h4">We're open:</Popover.Title>
                    <Popover.Content>
                        {props.hours}
                    </Popover.Content>
                </Popover>
            }
        >
            <Button variant="secondary">{props.title}</Button>
        </OverlayTrigger>
)

class Info extends Component {
    static defaultProps = {
        center: { lat: 30.2672, lng: -97.7431 },
        zoom: 13
    }

    render() {
        return (
            <div >
                <Nav />
                <Header />
                <Container fluid>
                    <AlertBox />
                    <h4 style={{textAlign: "center"}}>Info</h4>
                    <Fragment>
                        <GoogleMap
                            defaultZoom={this.props.zoom}
                            defaultCenter={this.props.center}
                            bootstrapURLKeys={{ key: "AIzaSyC4hr4A2hI8IyYXCi87Mfz-THwGY_fkaC0" }}
                        >
                            <Marker
                                lat={30.250723}
                                lng={-97.754297}
                                link={"https://maps.google.com/maps?ll=30.250723,-97.754297&z=13&t=m&hl=en-US&gl=US&q=1311%20S%201st%20St%20Austin%2C%20TX%2078704"}
                                text={"1311 South 1st"}
                            />
                            <Marker
                                lat={30.288362}
                                lng={-97.741838}
                                link={"https://maps.google.com/maps?ll=30.288362,-97.741838&z=13&t=m&hl=en-US&gl=US&q=2420%20Guadalupe%20St%20Austin%2C%20TX%2078705"}
                                text={"2420 Guadelupe"}
                            />
                        </GoogleMap>
                    </Fragment>
                    <Accord
                        title="Where are we?"
                        info="We have two locations: 1311 South 1st St. and 2420 Guadelupe St. (in the Urban Outfitters backlot)"
                    />
                    <Accordion style={{ textAlign: "center" }}>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    What are our hours?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={{display: "inline-flex", justifyContent:"space-around"}}>
                                    <HoursOverlay 
                                        title="1311 South 1st St."
                                        hours="Mon-Thurs 12-10; Fri/Sat 12-12"
                                    />
                                    <HoursOverlay 
                                        title="2420 Guadelupe St."
                                        hours="Mon-Sat 12-10"
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accord
                        title="Are we vegan?"
                        info="We do offer vegan options, though they do contain sugar and may have been manufactured on equipment previously used for non-vegan items."
                    />
                    <Accord
                        title="Do we sell gift cards?"
                        info="Yes! Please check the merch section."
                    />
                    <Accordion style={{ textAlign: "center" }}>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    How do we source our ingredients?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {<p>Because of the injustices prevalent in the banana trade, we strive to use bananas from <strong>socially responsible</strong> companies.<br /><br />
                                        Currently, most our bananas are from <a href="http://www.earth-brand.org/english/bananas.php" target="_blank" rel="noopener noreferrer">EARTH University</a>, though we often use other socially responsible brands, including organic Fair Trade brands.
                                        In 2015 we began using Fair Trade chocolate due to the injustices prevalent in the chocolate trade.<br /><br />
                                        We also compost our banana peels and recycle front of house and back of house. We’re not perfect, but we’re always looking for ways to do things in a more ethical manner and appreciate any feedback and advice in this regard.
                                        Please visit our <Link to={"/contact"}>contact page</Link> to start a conversation.</p>}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
                <Footer />
            </div>
        );
    }

}

export default Info;