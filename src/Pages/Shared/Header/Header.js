import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className="menu-bar" variant="dark" sticky="top" collapseOnSelect expand="lg" style={{ backgroundColor: 'rgb(91, 74, 102)', fontSize: '18px', fontFamily: 'Roboto' }}>
            <Container>
                <Navbar.Brand as={HashLink} to="/home"><Navbar.Text style={{ color: 'rgb(33, 23, 28)', fontWeight: '700', border: '1px solid rgb(33, 23, 28)', padding: '2px 5px' }}> Toys House
                </Navbar.Text></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link style={{ color: 'black' }} as={HashLink} to="/home">Home</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} as={HashLink} to="/toys">Buy-Toys</Nav.Link>
                    {user?.email && <Nav.Link style={{ color: 'black' }} as={HashLink} to="/dashboard">Dashboard</Nav.Link>}
                    {user?.email ? <><Nav.Link as={HashLink} style={{ color: 'black' }} to="#" onClick={logOut}>Logout</Nav.Link><Navbar.Text> Signed in as: {user.displayName}</Navbar.Text> </> :
                        <Nav.Link style={{ color: 'black' }} as={HashLink} to="/login">Login</Nav.Link>}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;