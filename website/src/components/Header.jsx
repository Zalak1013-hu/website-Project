import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="header-conteant">
          <img src="./src/assets/header.png" alt="" className="icon" />
          <h2 className="title">
            Rajeev Gandhi
            <br />
            <span>Computer Saksharta Mission</span>
          </h2>
        </div>

        <div className="header-middle">
          <img src="./src/assets/Image1.png" alt="" className="logo-online" />
        </div>

        <div className="header-right">
          <img src="./src/assets/Image2.png" alt="" className="logo-globe" />
        </div>
      </div>
    </header>
  );
};

export default Header;
