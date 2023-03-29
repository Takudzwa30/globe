import React, { useState } from "react";

// Components
import SimpleSelect from "../../../../Components/SimpleSelect/SimpleSelect";
import DateRange from "../../../../Components/DateRange/DateRange";

// Styles
import Style from "./HeroSection.module.css";

const HeroSection = () => {
  const [filter, setFilter] = useState("");
  const f = ["Dubai", "Sharjah", "Abu Dhabi"];

  return (
    <div className={Style.hero}>
      <h2>Helping Others</h2>
      <h1>Live & Travel</h1>
      <h5>Special offers to suit your plan</h5>
      <SimpleSelect
        placeholder="Deposit Type"
        value={filter}
        label="Trip"
        items={f}
        setValue={(value) => {
          setFilter(value);
        }}
      />
      <DateRange label={"Depart - Return"} />
    </div>
  );
};

export default HeroSection;
