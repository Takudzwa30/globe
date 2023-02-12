import React from "react";

// Icons
import { IoAirplane } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";

// Style
import Style from "./MobileMenu.module.css";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      //   onClick={() => setOpen(false)}
      onMouseLeave={() => setOpen(false)}
      className={open ? Style.menu : Style.menuHide}
    >
      <div className={Style.navLink}>
        <IoAirplane className={Style.navIcon} /> Flights
      </div>
      <div className={Style.navLink}>
        <IoIosBed className={Style.navIcon} /> Stays
      </div>
      <div className={Style.navLink}>Login</div>
      <div className={Style.navLink}>Signup</div>
    </div>
  );
};

export default MobileMenu;
