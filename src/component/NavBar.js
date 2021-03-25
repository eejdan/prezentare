import React from "react";
import { Navbar } from 'react-bootstrap'
import "./NavBar.css"

class NavBar extends React.Component {
    render() {
      return ( 
        <Navbar className="navbar">
          <i className="fab fa-centercode"></i>Restaurante Luca Galati
        </Navbar>
      );
    };
}
 
export default NavBar;