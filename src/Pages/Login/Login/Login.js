import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, authError } = useAuth();


    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <>
            <Header />
            <Container style={{ fontFamily: 'Roboto', padding: '50px' }}>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <h2 style={{ textAlign: "center" }}>Login</h2>
                        {!isLoading && <Form onSubmit={handleLoginSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onChange={handleOnChange}
                                    placeholder="Enter email"
                                    required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    placeholder="Password"
                                    required />
                            </Form.Group>
                            <Button style={{ width: "100%" }} type="submit" variant="dark">Login</Button>
                            {authError && <Alert variant="danger">{authError}</Alert>}
                            <h5 style={{ marginTop: "10px", textAlign: "center" }}>Or</h5>
                            <NavLink to="/register">
                                <Button style={{ width: "100%", fontSize: "18px" }} variant="light">New User? Please Register</Button>
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

export default Login;