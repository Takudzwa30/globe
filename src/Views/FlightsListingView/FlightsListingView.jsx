import React, { useState } from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";
import SimpleSelect from "../../Components/SimpleSelect/SimpleSelect";
import DateRange from "../../Components/DateRange/DateRange";

// Icons
import { FiSearch } from "react-icons/fi";

// Components
import Card from "./Components/Card/Card";

// Stytles
import Style from "./FlightsListingView.module.css";

const cities = ["Dubai", "Sharjah", "Abu Dhabi"];
const numbers = [1, 2, 3, 4, 5, 6];

const flightsData = [
  { content: cities, title: "From", placeholder: "Origin" },
  { content: cities, title: "To", placeholder: "Destination" },
  {
    content: ["Return", "One Way"],
    title: "Trip",
    placeholder: "Trip",
  },
  { content: numbers, title: "Passengers", placeholder: 1 },
  {
    content: ["Economy", "Business", "First"],
    title: "Class",
    placeholder: "Economy",
  },
];

const FlightsListingView = () => {
  return (
    <Container>
      <div className={Style.headingFilters}>
          {flightsData.map((item, index) => {
            return <SelectComponent key={index} {...item} />;
          })}

          <DateRange label={"Depart - Return"} />
        <div className={Style.search}>

          <FiSearch className={Style.searchIcon} />
        </div>
      </div>
      <div className={Style.wrapper}>
        <div>fhksdf</div>
        <Card />
      </div>
    </Container>
  );
};

const SelectComponent = ({ title, content, placeholder }) => {
  const [filter, setFilter] = useState("");

  return (
    <SimpleSelect
      placeholder={placeholder}
      value={filter}
      label={title}
      items={content}
      setValue={(value) => {
        setFilter(value);
      }}
    />
  );
};

export default FlightsListingView;
