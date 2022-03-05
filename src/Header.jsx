import React from "react";
import img from "./Images/logo.png";
import "./index.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={img} alt="CreateNoteLogo" srcset="" width="55" height="55" />
        <h1 clas>Google Keep Clone </h1>
      </div>
    </>
  );
};

export default Header;
