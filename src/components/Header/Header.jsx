import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="h-wrapper" style={{ background: "white" }}>
      <div className="flexCenter innerWidth paddings h-container">

        {/* logo */}

        <h1> <img src="./logo.png" alt="logo" width={70} /> Modul House</h1>

        {/* menu */}

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <div className="menu-hover">
              <a href="#">Home</a>
            </div>
            <div className="menu-hover">
              <a href="#">About</a>
            </div>
            <div className="menu-hover">
              <a href="#">Projects</a>
            </div>
            <div className="menu-hover">
              <a href="#">Blog</a>
            </div>
            <div className="menu-hover">
              <a href="#">Contact</a>
            </div>

            <button className="button">
              <a href="tel:+460703458799">Call us</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
