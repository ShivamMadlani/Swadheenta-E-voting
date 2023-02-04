import React from "react";
import Navbar from "../components/Navbar";

// css
import "../CSS/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-container"></div>
    </div>
  );
};

export default Home;
