import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        D-मतदान
      </Link>
      <Link className="vote-btn" to="/login">
        Proceed to vote
      </Link>
    </nav>
  );
};

export default Navbar;
