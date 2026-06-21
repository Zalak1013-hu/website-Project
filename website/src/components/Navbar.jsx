import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="d-flex">
          <ul className="d-flex">
            <li>
              <a href="Javascript:void(0)">Home</a>
            </li>
            <li>
              <a href="Javascript:void(0)">About Us</a>
            </li>
            <li>
              <a href="Javascript:void(0)">Course Offered</a>
            </li>
            <li>
              <a href="Javascript:void(0)">Student Corner</a>
            </li>
            <li>
              <a href="Javascript:void(0)">Franchisee</a>
            </li>
            <li>
              <a href="Javascript:void(0)">Download</a>
            </li>
            <li>
              <a href="Javascript:void(0)">Gallery</a>
            </li>
            <li>
              <a href="Javascript:void(0)">Contact Us</a>
            </li>
          </ul>

          <button className="menu-btn">☰</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
