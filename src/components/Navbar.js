import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">D-मतदान</div>
      <Link className="vote-btn" to='/vote'>Proceed to vote</Link>
    </nav>
  );
};

export default Navbar;
