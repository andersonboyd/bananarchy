import React, { Component } from "react";
import { Container, Row, Col, Tab, ListGroup, Accordion, Card, Button, Figure } from "react-bootstrap";
import AlertBox from "../components/AlertBox";
import Display from "../components/Display";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bananas from "../API/bananas.json";
import dips from "../API/dips.json";
import specials from "../API/specials.json";
import toppings from "../API/toppings.json";

const menuStyle = {
    display: "flex",
    marginTop: "20px",
    flexFlow: "row wrap",
    textAlign: "center",
    alignItems: "center",
    alignContent: "space-around",
    justifyContent: "space-evenly"
}

class Menu extends Component {

    render() {
        return (
            <div>
                <Nav />
                <Header />
                <Container fluid>
                    <AlertBox />
                    <h4 style={{textAlign: "center"}}>Menu</h4>
                    <div className="menu-items" style={menuStyle}>
                        {
                            bananas.map(banana =>
                                <Display
                                    key={banana.id}
                                    id={banana.id}
                                    src={banana.img}
                                    alt={banana.alt}
                                />
                            )
                        }
                    </div>
                    <Accordion>
                        <Card>
                            <Card.Header style={{ textAlign: "center" }}>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Our Menu
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Tab.Container id="menu-tab">
                                        <Row>
                                            <Col sm={4}>
                                                <ListGroup>
                                                    <ListGroup.Item action href="#link1">
                                                        Choose a banana
                                                    </ListGroup.Item>
                                                    <ListGroup.Item action href="#link2">
                                                        Choose a dip
                                                    </ListGroup.Item>
                                                    <ListGroup.Item action href="#link3">
                                                        Choose a topping
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Col>
                                            <Col sm={8}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="#link1">
                                                        <div className="bananas" style={menuStyle}>
                                                            <Figure>
                                                                <Figure.Image
                                                                    width="150"
                                                                    height="150"
                                                                    src="http://bananarchy.net/blog/wp-content/uploads/banana.jpeg"
                                                                    alt="WholeBanana"
                                                                />
                                                                <Figure.Caption>Whole Banana</Figure.Caption>
                                                            </Figure>
                                                            <Figure>
                                                                <Figure.Image
                                                                    width="150"
                                                                    height="150"
                                                                    src="https://media.istockphoto.com/photos/half-of-banana-isolated-on-a-white-picture-id1011404506?k=6&m=1011404506&s=170667a&w=0&h=cNXryl-Xrxo6dX76740Ai5EOUemK_PpkWs7Y7DUcEUM="
                                                                    alt="HalfBanana"
                                                                />
                                                                <Figure.Caption>Half banana</Figure.Caption>
                                                            </Figure>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="#link2">
                                                        <div className="dips" style={menuStyle}>
                                                            {
                                                                dips.map(dip =>
                                                                    <Display
                                                                        key={dip.id}
                                                                        id={dip.id}
                                                                        src={dip.img}
                                                                        alt={dip.name}
                                                                        desc={dip.desc}
                                                                    />
                                                                )
                                                            }
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="#link3">
                                                        <div className="toppings" style={menuStyle}>
                                                            {
                                                                toppings.map(top =>
                                                                    <Display
                                                                        key={top.id}
                                                                        id={top.id}
                                                                        src={top.img}
                                                                        alt={top.name}
                                                                        desc={top.desc}
                                                                    />
                                                                )
                                                            }
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header style={{ textAlign: "center" }}>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Our Specials
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {
                                        specials.map(special =>
                                            <div
                                                key={special.id}
                                                style={{textAlign: "center"}}
                                            >
                                                <h4>{special.name}</h4>
                                                <hr />
                                                <p>{special.desc}</p>
                                                <br />
                                            </div>
                                        )
                                    }
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

export default Menu;