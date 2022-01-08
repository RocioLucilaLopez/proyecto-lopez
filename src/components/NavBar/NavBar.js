import React from 'react'
import { Link} from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import CartWidget from '../CartWidget/CartWidget';
import logo from "./logo.png"


function NavBar() {
    return (
        <div>
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Link to= "/"><img src= {logo} alt="logo" className='logo'/></Link>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/all">Inicio</Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <Link to="/category/leggins">Leggins</Link>
                        <NavDropdown.Divider />
                        <Link to="/category/remeras">Remeras</Link>
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

