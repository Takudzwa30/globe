import React from "react";

// Styles
import Style from "./SimpleCard.module.css";

const SimpleCard = ({ children }) => {
  return <div className={Style.simpleCard}>{children}</div>;
};

export default SimpleCard;
