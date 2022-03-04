import React from 'react';


import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = ()=>(
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/home">RETO XCARET</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
export  default Header;