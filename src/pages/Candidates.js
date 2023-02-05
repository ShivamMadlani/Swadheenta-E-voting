import React from "react";
import { useState } from "react";
import "../CSS/Candidates.css";

import Navbar from "../components/Navbar";

const Candidates = () => {
  const [index, setIndex] = useState();

  const handleChecked = (e) => {
    setIndex(e.target.value);
  };

  return (
    <>
      <Navbar />

      <div className="candidates-page">
        <div className="Candidates">
          <label>Harsh</label>
          <button value="0" onClick={handleChecked}>
            Vote
          </button>
          <br />
        </div>
        <div className="Candidates">
          <label>Krupal</label>
          <button value="1" onClick={handleChecked}>
            Vote
          </button>
          <br />
        </div>
        <div className="Candidates">
          <label>Shivam</label>
          <button value="2" onClick={handleChecked}>
            Vote
          </button>
          <br />
        </div>
        <div className="Candidates">
          <label>Chaitri</label>
          <button value="3" onClick={handleChecked}>
            Vote
          </button>
          <br />
        </div>
        <p>{index}</p>
      </div>
    </>
  );
};

export default Candidates;
