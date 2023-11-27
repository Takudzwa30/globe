import React from "react";

// Libraries
import { Link } from "react-router-dom";

// Logo
import logo from "../../../Assets/logos/logoDark.svg";

// Style
import Style from "./AuthHeading.module.css";
import { paths } from "../../../Routes/routes";

const AuthHeading = ({ pageTitle, subTitle, link }) => {
  return (
    <div className={Style.authHeading}>
      <Link to={paths.main.home}>
        <img src={logo} alt="" />
      </Link>
      <h1>{pageTitle}</h1>
      <h6>{subTitle}</h6>
    </div>
  );
};

export default AuthHeading;
