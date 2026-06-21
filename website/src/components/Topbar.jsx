import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <>
      {/* Topbar section start */}
      <div className="topbar">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="d-flex">
              <li>
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
                0744-2410299
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-envelope"></i>
                </span>
                director@rgcsm.org
              </li>
            </ul>

            <div className="icons">
              <a href="javascript:void(0)">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="javascript:void(0)">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="javascript:void(0)">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="javascript:void(0)">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="javascript:void(0)">
                <i class="fa-brands fa-youtube"></i>
              </a>

              <button className="login-btn">
                Login <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar section end */}
    </>
  );
};

export default Topbar;
