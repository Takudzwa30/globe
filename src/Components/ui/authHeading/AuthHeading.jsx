import React from "react";

// Libraries
import { Link } from "react-router-dom";

// Logo
import logo from "../../../Assets/logos/logoDark.svg";

// Icons
import { IoIosArrowBack } from "react-icons/io";

// Paths
import { paths } from "../../../Routes/routes";

// Style
import Style from "./AuthHeading.module.css";

const AuthHeading = ({ pageTitle, subTitle, link }) => {
  return (
    <div className={Style.authHeading}>
      <Link to={paths.main.home}>
        <img src={logo} alt="" />
      </Link>
      <div>
        <Link to={paths.main.home} className={Style.backWrapper}>
          <IoIosArrowBack />
          <p>Back to Home Page</p>
        </Link>
      </div>
      <h1>{pageTitle}</h1>
      <h6>{subTitle}</h6>
    </div>
  );
};

export default AuthHeading;
