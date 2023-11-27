import React from "react";

// Styles
import Style from "./ThirdPartyLogin.module.css";

const ThirdPartyLogin = ({ text }) => {
  return (
    <>
      <div className={Style.textWrapper}>
        <div className={Style.line} />
        <p>{text}</p>
        <div className={Style.line} />
      </div>
    </>
  );
};

export default ThirdPartyLogin;
