import React from "react";
import Navbar from "../components/Navbar";

import "../CSS/userLogin.css";

const UserLogin = () => {
  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login-container">
          <form action="">
            <input type="text" name="" id="" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
