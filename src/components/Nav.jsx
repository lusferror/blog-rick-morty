import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function BarraSuperior() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 justify-content-end">
                        <NavDropdown title="Favoritos" id="basic-nav-dropdown float-end">
                            <NavDropdown.Item href="#action/3.1">Rick</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Morty
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}