import React, { useState } from "react";

// Components
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

// Styles
import Style from "./DateRange.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRange = ({ ...props }) => {
  // Variables
  const [show, setShow] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "short" });
    const year = dateObj.getFullYear();

    return `${day < 10 ? "0" : ""}${day} ${month} ${year}`;
  }

  return (
    <div className={Style.rangeWrapper} onClick={() => setShow(true)}>
      <p>{props.label}</p>
      <div
        style={{
          display: show ? "block" : "none",
        }}
        className={Style.range}
      >
        <DateRangePicker
          onChange={(item) => {
            setState([item.selection]);
            if (item.selection) {
              setShow(false);
            }
          }}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={state}
          direction="horizontal"
        />
      </div>
      <p>{`${
        state[0]["startDate"] ? formatDate(state[0]["startDate"]) : "DD/MM/YYY"
      } - ${
        state[0]["endDate"] ? formatDate(state[0]["endDate"]) : "DD/MM/YYY"
      }`}</p>
    </div>
  );
};

export default DateRange;
