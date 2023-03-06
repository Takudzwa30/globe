import React from "react";

// Libraries
import { Select } from "@hybris-software/ui-kit";

// Styles
import Style from "./SimpleSelect.module.css";

const SimpleSelect = ({ ...props }) => {
  return (
    <div className={Style.selectContainer}>
      <p>{props.label}</p>
      <Select {...props} />
    </div>
  );
};

export default SimpleSelect;
