import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> FENIX BARCELONA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Nuestros valores</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Accesorio</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Bikers</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Remerones</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Trajes de baño</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
              </Container>
            </Navbar>
        </div>
    )
}
export default NavBar

