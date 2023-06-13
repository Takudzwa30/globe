import React, { useState, forwardRef } from "react";

// Libraries
import DatePicker from "react-datepicker";
import moment from "moment";

// Icons
import calendar from "../../Assets/icons/calendar.svg";
import downArrow from "../../Assets/icons/downArrow.svg";

// Styles
import Style from "./DateRange.module.css";

const DateRange = ({
  placeHolder,
  label,
  startDate,
  endDate,
  dateRange,
  setDateRange,
}) => {
  // Functions
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <button className={Style.example} onClick={onClick} ref={ref}>
      <h6 className={Style.title}>{label}</h6>
        <img src={calendar} alt="" />
        {startDate && endDate !== null
          ? dateRange && formatDate(startDate) + "  -  " + formatDate(endDate)
          : placeHolder}
      </button>
    </>
  ));

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      minDate={moment().toDate()}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default DateRange;
