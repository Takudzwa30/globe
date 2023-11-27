import React from "react";

// Components
import ToolTip from "../toolTip/ToolTip";

// Logos
import facebook from "../../../Assets/logos/facebook.png";
import apple from "../../../Assets/logos/apple.png";
import google from "../../../Assets/logos/google.png";

// Styles
import Style from "./ThirdPartyLogin.module.css";

// Data
const logos = [facebook, google, apple];

const ThirdPartyLogin = ({ text }) => {
  return (
    <>
      <div className={Style.textWrapper}>
        <div className={Style.line} />
        <p>{text}</p>
        <div className={Style.line} />
      </div>
      <div className={Style.logosWrapper}>
        {logos.map((item, index) => {
          return <LogoWrapper key={index} logo={item} />;
        })}
      </div>
    </>
  );
};

const LogoWrapper = ({ logo }) => {
  return (
    <ToolTip>
      <div className={Style.logoWrapper}>
        <img src={logo} alt="" />
      </div>
    </ToolTip>
  );
};

export default ThirdPartyLogin;
