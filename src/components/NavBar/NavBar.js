import React from 'react'
import '../index.css'
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img
                        src="./logo.png"
                        className="d-inline-block align-top"
                        alt=" logo"
                        /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About us</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Bikers</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Remerones</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}
export default NavBar

