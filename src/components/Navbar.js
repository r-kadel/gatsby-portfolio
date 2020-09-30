import { Link } from "gatsby"
import React from "react"

function Navbar() {
  return (
    <nav className="navbar">
      <span className="burger"></span>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-li">
          <Link to="/experience">Experience</Link>
        </li>
        <li className="nav-li">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
