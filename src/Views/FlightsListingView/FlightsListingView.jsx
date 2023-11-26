import React, { useState } from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";
import SimpleSelect from "../../Components/SimpleSelect/SimpleSelect";
import DateRange from "../../Components/DateRange/DateRange";
import useForm from "@hybris-software/use-ful-form";
// import DropDown from "../../Components/ui/DropDown/DropDown";

// Icons
import { BsCheckLg } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

// Components
import Card from "./Components/Card/Card";
import InputRangeSlider from "../../Components/ui/InputRangeSlider/InputRangeSlider";

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
  // Form
  const form = useForm({
    inputs: {
      fullName: {
        required: true,
        naturel: "text",
      },
      email: {
        required: true,
        nature: "email",
      },
      numberOfRooms: {
        required: true,
        nature: "text",
      },
      dateRange: {
        required: true,
      },
      checkOutDate: {
        required: true,
      },
    },
  });

  // Variables
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const airLines = ["Emirates", "Dubai", "Qatar", "Etihad"];
  const trips = [
    "Round trip",
    "One Way",
    "Multi-City",
    "My Dates Are Flexible",
  ];

  return (
    <Container>
      <div className={Style.headingFilters}>
        {flightsData.map((item, index) => {
          return <SelectComponent key={index} {...item} />;
        })}

        <DateRange
          dateRange={dateRange}
          startDate={startDate}
          endDate={endDate}
          setDateRange={setDateRange}
          {...form.getInputProps("dateRange")}
          placeHolder="Select dates"
          label={"Depart - Return"}
        />

        <div className={Style.search}>
          <FiSearch className={Style.searchIcon} />
        </div>
      </div>
      <div className={Style.wrapper}>
        <div className={Style.filters}>
          <h5>Filters</h5>
          {/* TODO : Add dropdown to each filter  */}
          {/* <DropDown length={2} title={"Price"}>
                  <h5>$4500</h5>
                  <h5>$4500</h5>
               </DropDown> */}
          <div className={Style.filter}>
            <h6>Price</h6>
            <InputRangeSlider />
          </div>
          <div className={Style.filter}>
            <h6>Rating</h6>
            <Ratings />
          </div>
          <div className={Style.filter}>
            <h6>Airlines</h6>
            <div className={Style.checks}>
              {airLines.map((airLine, index) => {
                return <CheckComponent keuy={index} value={airLine} />;
              })}{" "}
            </div>
          </div>
          <div className={Style.filter}>
            <h6>Trips</h6>
            <div className={Style.checks}>
              {trips.map((trip, index) => {
                return <CheckComponent keuy={index} value={trip} />;
              })}{" "}
            </div>
          </div>
        </div>
        <div className={Style.separator} />
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

const Ratings = () => {
  const [rate, setRate] = useState(null);
  return (
    <div className={Style.ratings}>
      {[...Array(5)].map((_, index) => (
        <div
          onClick={() => setRate(index)}
          className={rate === index ? Style.selectedRate : Style.rate}
          key={index}
        >
          {index}+
        </div>
      ))}
    </div>
  );
};

const CheckComponent = ({ value }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={Style.class} onClick={() => setIsSelected((prev) => !prev)}>
      <BsCheckLg
        style={{
          color: "white",
        }}
        className={isSelected ? Style.checked : Style.unChecked}
      />
      <p>{value}</p>
    </div>
  );
};

export default FlightsListingView;
