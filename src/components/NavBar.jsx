import React from 'react'
import '../index.css'


function NavBar() {
    return (
        <div>
         <nav id="nav">
            <h1 className="titulo ">Proyecto Rocio Lopez</h1>
            <ul className="menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar

