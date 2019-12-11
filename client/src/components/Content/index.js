import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Content/style.css";

class Content extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <div className="testDiv" style={{textAlign: "center"}}>
                            {<p>It looks like your cart is empty. Click <Link to={"/merch"}>here</Link> to return to our shop.</p>}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Content;