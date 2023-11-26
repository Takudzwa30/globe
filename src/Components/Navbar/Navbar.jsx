import React, { useState } from "react";

// Components
import MobileMenu from "../MobileMenu/MobileMenu";
import ToolTip from "../ui/toolTip/ToolTip";

// Libraries
import { Link, useNavigate } from "react-router-dom";
import { Container } from "@hybris-software/ui-kit";

// Routes
import { paths } from "../../Routes/routes";

// Utils
import classNames from "@hybris-software/ui-kit/dist/Utils/classNames";

// icons
import { IoAirplane } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
// import { FaRegUserCircle } from "react-icons/fa";

// logo
import Logo from "../../Assets/logos/logoDark.svg";

// Style
import Style from "./Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Container className={Style.navBarContainer}>
      <MobileMenu open={open} setOpen={setOpen} />
      <div className={Style.links}>
        <Link
          to={paths.main.flights}
          className={Style.flights}
          onClick={() => setActive(true)}
        >
          <IoAirplane className={Style.plane} />
          <p>Find Flight</p>
        </Link>
        <ToolTip>
          <Link
            to={paths.main.stays}
            className={Style.hotels}
            style={{
              pointerEvents: "none",
            }}
            onClick={() => setActive(false)}
          >
            <IoIosBed />
            <p>Find Stays</p>
          </Link>
        </ToolTip>

        <div
          style={{
            display:
              window.location.pathname === paths.main.home ? "none" : "block",
          }}
          className={active ? Style.selector : Style.selectorActive}
        ></div>
      </div>

      <Link className={Style.logo} to={paths.main.home}>
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
        <div onClick={() => navigate(paths.auth.login)} className={Style.login}>
          Login
        </div>
        <ToolTip>
          <div className={Style.signup}>Sign up</div>
        </ToolTip>
      </div>
    </Container>
  );
};

export default Navbar;
