
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo/logo.png'
import './Header.css'



const Header = () => {
    return (
        <div >
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img className="logo" src={logo} alt="" /> Cooking Paradise</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/service">Services</Nav.Link>
                        <Nav.Link href="/instractors">Instractors</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar >
        </div >
    );
};

export default Header;