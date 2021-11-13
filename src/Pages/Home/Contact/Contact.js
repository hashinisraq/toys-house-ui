import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div style={{ padding: "110px", textAlign: 'center', backgroundColor: 'rgb(45, 58, 74, 0.9)' }}>
            <h2 className="pb-5">Contact us</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Email us at</Card.Title>
                            <Card.Text>
                                <p>Email: toyshouse01@gmail.com<br/>
                                Email: toyshouse02@yahoo.com</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Call us at</Card.Title>
                            <Card.Text>
                                <p>Phone: +8801547678474 <br/>
                                Phone: +8805476784567</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Find us at</Card.Title>
                            <Card.Text>
                                <p>House no: 09, Road no: 13/2<br />
                                Dhanmondi, Dhaka-1209, Bangladesh</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;