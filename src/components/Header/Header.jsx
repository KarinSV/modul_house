import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

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
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
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
