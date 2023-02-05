import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [toRoute, setToRoute] = useState("");
  const [routeText, setRouteText] = useState('')

  useEffect(() => {
    let url = window.location.pathname;
    console.log(url);

    if (url === "/") {
      setToRoute("/login");
      setRouteText('Add account')
    } else if (url === "/login") {
      setToRoute("/vote");
      setRouteText('Make Vote')
    }
    else if(url === '/vote')
    {
      setToRoute('/')
      setRouteText('Back to Home')
    }
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        D-मतदान
      </Link>
      <Link className="vote-btn" to={toRoute}>
        {routeText}
      </Link>
    </nav>
  );
};

export default Navbar;
