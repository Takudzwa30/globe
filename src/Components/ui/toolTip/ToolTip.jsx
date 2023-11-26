import React from "react";

// Styles
import Style from "./ToolTip.module.css";

const ToolTip = ({ children }) => {
  return (
    <div className={Style.tooltip}>
      {children}
      <span className={Style.tooltiptext}>{"Coming Soon!"}</span>
      <div className={Style.triangle} />
    </div>
  );
};

export default ToolTip;
