import React, { useState } from "react";
import '../Css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    const [active, setActive] = useState("navMenu");
  const navToggle = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");
  };

    return (
    <nav className="nav">
      <ul className={active}>
        <li className="navItems">
          <Link to= '/Home' className="navLink"> Home </Link> 
        </li>

        <li className="navItems">
          <Link to='/Quienessomos' className="navLink">Quienes somos </Link>
        </li>

        <li className="navItems">
          <Link to= '/Inscripcion' className="navLink"> Inscripción </Link>
        </li>

        <li className="navItems">
          <Link to= '/Capacitacion' className="navLink">Capacitación </Link>
        </li>

        <li className="navItems">
          <Link to ='/Contacto' className="navLink">Contacto </Link>
        </li>

      </ul>
      <div onClick={navToggle} className="navToggler">
        <div className="linea1"></div>
        <div className="linea2"></div>
        <div className="linea3"></div>
      </div>
    </nav>
  );
}

export default Navbar;