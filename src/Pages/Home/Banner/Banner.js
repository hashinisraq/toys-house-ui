import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.png';

const Banner = () => {
    return (
        <Row xs={1} md={1} lg={2} className="g-4" style={{ backgroundColor: 'rgb(91, 155, 130)' }}>
            <Col className="d-flex justify-content-center align-items-center">
                <div style={{ padding: '20px 30px 20px 30px' }}>
                    <h1>Get Your Desire Product <br />
                        From <span style={{ color: 'blue' }}>Toys House</span>
                    </h1>
                    <h6 style={{ padding: '18px 0 18px 0', lineHeight: '20px' }}>
                        We are offering you the best qualityful and fast delivery product for your child with prizes. We also offering you non-toxic material which are used to prepare the toys.
                    </h6>
                    <Button><Link style={{ textDecoration: 'None', color: 'white' }} to="/toys">Get Your Toys</Link></Button>
                </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <img src={banner} alt="" />
            </Col>
        </Row>
    );
};

export default Banner;