import React from "react";

// Libraries
import { InputField } from "@hybris-software/ui-kit";

// Styles
import Style from "./SimpleInput.module.css";

const SimpleInput = ({ label, ...props }) => {
  // Variables
  const inputFieldProps = { ...props };

  return (
    <div className={props.icon ? Style.simpleInputWithIcon : Style.simpleInput}>
      <p>{label}</p>
      <InputField {...inputFieldProps} />
    </div>
  );
};

export default SimpleInput;
