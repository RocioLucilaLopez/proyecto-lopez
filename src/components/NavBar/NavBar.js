import React from 'react'
import { Link} from 'react-router-dom'; //para enrutar sin que se refresque la página. Pinta ruta en url
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import CartWidget from './CartWidget';
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
                        <Link to="/">Inicio</Link>
                        <Nav.Link href="#link">Nuestros valores</Nav.Link>  
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <Link className='' to="/categoria/leggins">leggins</Link>
                        <NavDropdown.Divider />
                        <Link className='' to="/categoria/remeras">remeras</Link>

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

