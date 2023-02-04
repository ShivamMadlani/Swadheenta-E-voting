import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">D-मतदान</div>
      <button className="vote-btn">Proceed to vote</button>
    </nav>
  );
};

export default Navbar;
