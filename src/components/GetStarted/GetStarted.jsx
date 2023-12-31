import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">

          <span className="primaryText">Get started with Modul House</span>
          <span className="secondaryText">
            Subscribe and find your residence
          </span>

          <button className="button">
            <a href="#">Get started</a>
          </button>

        </div>
      </div>
    </div>
  );
};

export default GetStarted;
