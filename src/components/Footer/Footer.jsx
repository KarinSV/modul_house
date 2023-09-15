import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import Pinterest from "@material-ui/icons/Pinterest";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <h1> <img src="./logo.png" alt="logo" width={70} /> Modul House</h1>
          <span className="secondaryText">
            Our vision is to make a house for<br />
            people the best place to live for them
          </span>
          <span className="secondaryText">
            Follow us
          </span>
          <div className="socialMedia">
          <FacebookIcon onClick={() => window.location.href ="https://www.facebook.com/"}/>
          <Twitter onClick={() => window.location.href ="https://twitter.com/?lang=en"}/>
          <Instagram onClick={() => window.location.href ="https://www.instagram.com//"}/>
          <Pinterest onClick={() => window.location.href ="https://www.pinterest.com/#top"}/>
          </div>
        </div>

        <div className="flexColStart f-right">
          <div className="flexCenter f-menu">
            <span>
              <a href="#">About Us</a><br/>
              <span className="footerMenu">
              <a href="#">Who we are</a><br/>
              <a href="#">Features</a><br/>
              <a href="#">News & Blog</a>
                </span>
            </span>
            <span>
              <a href="#">Company</a><br/>
              <span className="footerMenu">
              <a href="#">How we work</a><br/>
              <a href="#">Capital</a><br/>
              <a href="#">Security</a>
              </span>
            </span>
            <span>
              <a href="#">Support</a><br/>
              <span className="footerMenu">
              <a href="#">FAQs</a><br/>
              <a href="#">Help</a><br/>
              <a href="#">Contact us</a>
              </span>
              </span>
            <span>
              <a href="#">Legal</a><br/>
               <span className="footerMenu">
              <a href="#">Policy</a><br/>
              <a href="#">Documents</a><br/>
              <a href="#">Help</a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
