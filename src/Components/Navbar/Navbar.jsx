import React, { useState } from "react";

// Components
import MobileMenu from "../MobileMenu/MobileMenu";

// Libraries
import { Link } from "react-router-dom";
import { Container } from "@hybris-software/ui-kit";

// Utils
import classNames from "@hybris-software/ui-kit/dist/Utils/classNames";

// icons
import { IoAirplane } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

// logo
import Logo from "../../Assets/logos/logoDark.svg";

// Style
import Style from "./Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <Container className={Style.navBarContainer}>
      <MobileMenu open={open} setOpen={setOpen} />
      <div className={Style.links}>
        <Link
          to="/flights"
          className={Style.flights}
          onClick={() => setActive(true)}
        >
          <IoAirplane className={Style.plane} />
          <p>Find Flight</p>
        </Link>
        <Link
          to="/stays"
          className={Style.hotels}
          onClick={() => setActive(false)}
        >
          <IoIosBed />
          <p>Find Stays</p>
        </Link>
        <div
          style={{
            display: window.location.pathname === "/globe/" ? "none" : "block",
          }}
          className={active ? Style.selector : Style.selectorActive}
        ></div>
      </div>

      <Link className={Style.logo} to={"/"}>
        <img src={Logo} alt="" />
      </Link>

      <div className={Style.navBarIcon}>
        <div
          className={classNames(
            Style.navBarIconMobile,
            open ? Style.active : Style.notActive
          )}
          onClick={() => {
            setOpen(!open);
            // if (open) {
            //   document.body.style.overflow = "unset";
            // } else {
            //   document.body.style.overflow = "hidden";
            // }
          }}
        >
          <span className={Style.iconPartOne}></span>
          <span className={Style.iconPartTwo}></span>
          <span className={Style.iconPartThree}></span>
        </div>
      </div>

      <div className={Style.profile}>
        <div className={Style.login}>Login</div>
        <div className={Style.signup}>Sign up</div>
      </div>
    </Container>
  );
};

export default Navbar;
