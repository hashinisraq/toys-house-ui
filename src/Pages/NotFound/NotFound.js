import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Row xs={1} md={1} className="g-4" style={{textAlign: 'center', padding: '100px 10px', backgroundColor: 'rgb(58, 93, 127)'}}>
                {
                    <Col>
                        <Card className="border border-0" style={{backgroundColor: 'rgb(58, 93, 127)'}}>
                            <Card.Body>
                                <Card.Text>
                                    <h1>404</h1>
                                    <h2>Page Not Found</h2>
                                    <p>The resourse requested could not be found on this server</p>
                                    <Button variant="secondary" style={{backgroundColor: 'rgb(91, 74, 102)'}}><Link style={{ textDecoration: 'None', color: 'Black' }} to="/home">Go Home</Link></Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
        </div>
    );
};

export default NotFound;