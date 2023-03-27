import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return ( 
      <nav className="Navigation">
        <ul className="ul">
          <le className="navLink"><a href="http://www.google.com" target="_blank"> Inicio</a></le>
          <le className="navLink"><a href="http://www.google.com"  target="_blank" > Nosotros</a></le>
          <le className="navLink"><a href="http://www.google.com" target="_blank" > Servicios</a></le>
          <le className="navLink"><a href="http://www.google.com" target="_blank" > Contacto</a></le>
          <le className="navLink"><a href="http://www.mercadolibre.com" target="_blank" > <CartWidget /></a></le>
      
        </ul>
      </nav>

    );
};

export default NavBar