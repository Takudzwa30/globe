import React, { useState } from "react";

// Icons
import { BsCheckLg } from "react-icons/bs";

// Styles
import Style from "./CheckComponent.module.css";

const CheckComponent = ({ value }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={Style.class} onClick={() => setIsSelected((prev) => !prev)}>
      <BsCheckLg
        style={{
          color: "white",
        }}
        className={isSelected ? Style.checked : Style.unChecked}
      />
      <p>{value}</p>
    </div>
  );
};

export default CheckComponent;
