import React, { useState } from "react";

// Loibraries
import { Container } from "@hybris-software/ui-kit";

// icons
import { IoAirplane } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";

// Components
import SimpleSelect from "../../Components/SimpleSelect/SimpleSelect";
import DateRange from "../../Components/DateRange/DateRange";

// Styles
import Style from "./Search.module.css";

const Search = ({ heading }) => {
  const [searchFilter, setSearchFilter] = useState("flights");
  const [filter, setFilter] = useState("");
  const [filterSecond, setFilterSecond] = useState("");
  const cities = ["Dubai", "Sharjah", "Abu Dhabi"];
  const items = ["Gweru", "Harare", "Kwekwe"];

  const flightsData = [
    { content: cities, title: "From", placeholder: "Origin" },
    { content: cities, title: "To", placeholder: "Destination" },
    {
      content: [
        "Returhhhhjhjhfjdhfjdshfudhfjsdhfhjdsfgghdsfghdjsfn",
        "One Way",
      ],
      title: "Trip",
      placeholder: "Trip",
    },
    { content: [1, 2, 3, 4, 5, 6], title: "Passengers", placeholder: 1 },
    {
      content: ["Economy", "Business", "First"],
      title: "Class",
      placeholder: "Economy",
    },
  ];

  return (
    <Container>
      <div className={Style.mainContainer}>
        <div className={Style.heading}>
          <div
            className={
              searchFilter === "stays"
                ? Style.greenUnderLineRight
                : Style.greenUnderLineLeft
            }
          />
          <div
            onClick={() => setSearchFilter("flights")}
            className={Style.flights}
          >
            <IoAirplane />
            Flights
          </div>
          <div
            onClick={() => setSearchFilter("stays")}
            className={Style.hotels}
          >
            <IoIosBed />
            Stays
          </div>
        </div>
        <div className={Style.search}>
          {flightsData.map((item, index) => {
            return <SelectComponent key={index} {...item} />;
          })}

          <DateRange label={"Depart - Return"} />
        </div>
        <div className={Style.buttons}>
            
        </div>
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

export default Search;
