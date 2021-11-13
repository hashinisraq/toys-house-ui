import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, authError } = useAuth();


    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <>
            <Header />
            <Container style={{ fontFamily: 'Roboto', padding: '50px' }}>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <h2 style={{ textAlign: "center" }}>Register</h2>
                        {!isLoading && <Form onSubmit={handleLoginSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    placeholder="Name"
                                    required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Your Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    placeholder="Email"
                                    required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Your Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    placeholder="Password"
                                    required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Re-type Your Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    placeholder="Password"
                                    required />
                            </Form.Group>
                            <Button style={{ width: "100%" }} type="submit" variant="dark">Sign up</Button>
                            {authError && <Alert variant="danger">{authError}</Alert>}
                            <h5 style={{ marginTop: "10px", textAlign: "center" }}>Or</h5>
                            <NavLink to="/login">
                                <Button style={{ width: "100%", fontSize: "18px" }} variant="light">Already A User? Please Login</Button>
                            </NavLink>
                        </Form>}
                        {isLoading && <div className="d-flex justify-content-center align-items-center"><Spinner animation="border" variant="dark" /></div>}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Register;