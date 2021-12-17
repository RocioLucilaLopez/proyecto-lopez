import React from 'react'
import { Link } from 'react-router-dom'; //para enrutar sin que se refresque la página
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import CartWidget from './CartWidget';
import logo from "./logo.png"


function NavBar() {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Link to= "/"><img src= {logo} alt="logo" className='logo'/></Link>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Inicio</Link>
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
                <Link to="/Cart">Carrito</Link>
                <CartWidget/>
              </Container>
            </Navbar>
        </div>
    )
}
export default NavBar

