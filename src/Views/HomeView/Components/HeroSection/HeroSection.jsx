import React, { useState } from "react";

// Components
import SimpleSelect from "../../../../Components/SimpleSelect/SimpleSelect";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

// Styles
import Style from "./HeroSection.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const HeroSection = () => {
  const [filter, setFilter] = useState("");
  const f = ["Dubai", "Sharjah", "Abu Dhabi"];
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
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
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={state}
        direction="horizontal"
        color="red"
        className={Style.range}
        staticRanges={[]}
        inputRanges={[]}
      />
    </div>
  );
};

export default HeroSection;
