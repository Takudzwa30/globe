import React from "react";

// Styles
import Style from "./DropDown.module.css";

const DropDown = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>DropDown</div>
      {children}
    </>
  );
};

export default DropDown;
