import React from "react";

// Styles
import Style from "./FlightCard.module.css";

const FlightCard = () => {
  return (
    <div className={Style.card}>
      <div className={Style.top}>
        <h5>Return Wed, Dec 8</h5>
        <h5>2h 28m</h5>
      </div>
      <div className={Style.center}>
        
      </div>
    </div>
  );
};

export default FlightCard;
