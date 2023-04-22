import React, { useState } from "react";

// Loibraries
import { Container, InputField } from "@hybris-software/ui-kit";

// icons
import { IoAirplane } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";

// Components
import SimpleSelect from "../../Components/SimpleSelect/SimpleSelect";
import DateRange from "../../Components/DateRange/DateRange";
import CustomButton from "../CustomButton/CustomButton";

// Styles
import Style from "./Search.module.css";

const Search = ({ filterValue, home }) => {
  const [searchFilter, setSearchFilter] = useState(filterValue);
  const cities = ["Dubai", "Sharjah", "Abu Dhabi"];
  const numbers = [1, 2, 3, 4, 5, 6];

  const flightsData = [
    { content: cities, title: "From", placeholder: "Origin" },
    { content: cities, title: "To", placeholder: "Destination" },
    {
      content: [
        "Return",
        "One Way",
      ],
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

  const hotelsData = [
    { content: cities, title: "Enter Destination", placeholder: "Destination" },
    {
      content: ["Return", "One Way"],
      title: "Trip",
      placeholder: "Trip",
    },
    { content: numbers, title: "Rooms", placeholder: 1 },
    {
      content: numbers,
      title: "Guests",
      placeholder: 1,
    },
  ];

  return (
    <Container>
      <div className={Style.mainContainer}>
        {home && (
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
        )}

        {!home && (
          <div className={Style.title}>
            {filterValue === "flights" && <h5>Where are you flying? </h5>}
            {filterValue === "stays" && <h5>Where are you staying? </h5>}{" "}
          </div>
        )}

        {searchFilter === "flights" && (
          <>
            <div className={Style.search}>
              {flightsData.map((item, index) => {
                return <SelectComponent key={index} {...item} />;
              })}

              <DateRange label={"Depart - Return"} />
            </div>
            <div className={Style.buttons}>
              <div className={Style.promoCodeField}>
                <InputField
                  className={Style.field}
                  placeholder="+ Add Promo Code"
                />
              </div>

              <CustomButton icon>Show Flights</CustomButton>
            </div>
          </>
        )}
        {searchFilter === "stays" && (
          <>
            <div className={Style.search}>
              {hotelsData.map((item, index) => {
                return <SelectComponent key={index} {...item} />;
              })}

              <DateRange label={"Check In - Check out"} />
            </div>
            <div className={Style.buttons}>
              <div className={Style.promoCodeField}>
                <InputField
                  className={Style.field}
                  placeholder="+ Add Promo Code"
                />
              </div>

              <CustomButton icon>Show Places</CustomButton>
            </div>
          </>
        )}
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
