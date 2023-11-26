import React, { useState } from "react";

// Loibraries
import { Container, InputField } from "@hybris-software/ui-kit";
import { useNavigate } from "react-router-dom";

// icons
import { IoAirplane } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";

// Paths
import { paths } from "../../Routes/routes";

// Components
import SimpleSelect from "../SimpleSelect/SimpleSelect";
import DateRange from "../../Components/DateRange/DateRange";
import CustomButton from "../CustomButton/CustomButton";
import ToolTip from "../ui/toolTip/ToolTip";

// Styles
import Style from "./Search.module.css";

const Search = ({ filterValue, home }) => {
  const [searchFilter, setSearchFilter] = useState(filterValue);
  const cities = ["Dubai", "Sharjah", "Abu Dhabi"];
  const numbers = [1, 2, 3, 4, 5, 6];
  const navigate = useNavigate();

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

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

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
            <ToolTip>
              <div
                onClick={() => setSearchFilter("stays")}
                style={{
                  pointerEvents: "none",
                }}
                className={Style.hotels}
              >
                <IoIosBed />
                Stays
              </div>
            </ToolTip>
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

              <DateRange
                dateRange={dateRange}
                startDate={startDate}
                endDate={endDate}
                setDateRange={setDateRange}
                //  {...form.getInputProps("dateRange")}
                placeHolder="Select dates"
                label={"Depart - Return"}
              />
            </div>
            <div className={Style.buttons}>
              <div className={Style.promoCodeField}>
                <InputField
                  className={Style.field}
                  placeholder="+ Add Promo Code"
                />
              </div>

              <CustomButton
                onClick={() => navigate("/globe/flights-list")}
                icon
              >
                Show Flights
              </CustomButton>
            </div>
          </>
        )}
        {searchFilter === "stays" && (
          <>
            <div className={Style.search}>
              {hotelsData.map((item, index) => {
                return <SelectComponent key={index} {...item} />;
              })}

              <DateRange
                dateRange={dateRange}
                startDate={startDate}
                endDate={endDate}
                setDateRange={setDateRange}
                //  {...form.getInputProps("dateRange")}
                placeHolder="Select dates"
                label={"Check In - Check out"}
              />
            </div>
            <div className={Style.buttons}>
              <div className={Style.promoCodeField}>
                <InputField
                  className={Style.field}
                  placeholder="+ Add Promo Code"
                />
              </div>

              <CustomButton
                onClick={() => {
                  filterValue === "flights"
                    ? navigate(paths.main.flightsList)
                    : navigate(paths.main.staysList);
                }}
                icon
              >
                Show Places
              </CustomButton>
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
