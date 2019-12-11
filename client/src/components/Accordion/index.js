import React  from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Accord = props => {
    return(
        <Accordion style={{textAlign: "center"}}>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        {props.title}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>{props.info}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Accord;
