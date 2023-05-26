import React from "react";

// Style
import Style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={Style.glassWrapper}>
      <div className={Style.hourglass}></div>
    </div>
  );
};

export default Loader;
