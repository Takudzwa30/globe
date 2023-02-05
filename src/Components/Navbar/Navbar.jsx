import React, { useState } from "react";

// Libraries
import { Link } from "react-router-dom";

// icons
import { IoAirplane } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";

// logo
import Logo from "../../Assets/logos/logoDark.svg";

// Style
import Style from "./Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(true);
  return (
    <div className={Style.navBarContainer}>
      <div className={Style.links}>
        <div className={Style.flights} onClick={() => setActive(true)}>
          <IoAirplane className={Style.plane} />
          <p>Find Flight</p>
        </div>
        <div className={Style.hotels} onClick={() => setActive(false)}>
          <IoIosBed />
          <p>Find Stays</p>
        </div>
        <div className={active ? Style.selector : Style.selectorActive}></div>
      </div>

      <Link className={Style.logo} to={"/"}>
        <img src={Logo} alt="" />
      </Link>

      <div className={Style.profile}>
        <div className={Style.login}>Login</div>
        <div className={Style.signup}>Sign up</div>
      </div>
    </div>
  );
};

export default Navbar;
