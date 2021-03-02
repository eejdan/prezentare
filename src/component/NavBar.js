import React from "react";
import { Navbar } from 'react-bootstrap'
import "./NavBar.css"

class NavBar extends React.Component {
    render() {
      return ( 
        <Navbar className="navbar">
          <i className="fas fa-tree"></i>  Foodbear
        </Navbar>
      );
    };
}
 
export default NavBar;