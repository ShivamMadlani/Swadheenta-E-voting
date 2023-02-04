import React from "react";
import Navbar from "../components/Navbar";

// css
import "../CSS/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Navbar />
        <div className="home-container">
          <div className="box">
            <img
              className="box-img"
              src={process.env.PUBLIC_URL + "/images/decentralised.png"}
              alt=""
            />
            <div className="box-text">E-Voting</div>
          </div>

          <div className="box">
            <img
              className="box-img"
              src={process.env.PUBLIC_URL + "/images/ethereum.jpg"}
              alt=""
            />
            <div className="box-text">E-Voting</div>
          </div>

          <div className="box">
            <img
              className="box-img"
              src={process.env.PUBLIC_URL + "/images/e-voting.jpg"}
              alt=""
            />
            <div className="box-text">E-Voting</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
