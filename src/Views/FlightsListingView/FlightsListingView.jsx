import React, { useState } from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";
import SimpleSelect from "../../Components/SimpleSelect/SimpleSelect";
import DateRange from "../../Components/DateRange/DateRange";
import useForm from "@hybris-software/use-ful-form";

// Icons
import { FiSearch } from "react-icons/fi";

// Components
import Card from "./Components/Card/Card";

// Stytles
import Style from "./FlightsListingView.module.css";
// import DropDown from "../../Components/ui/DropDown/DropDown";

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

   const [dateRange, setDateRange] = useState([null, null]);
   const [startDate, endDate] = dateRange;

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
               {/* <DropDown length={2} title={"Price"}>
                  <h5>$4500</h5>
                  <h5>$4500</h5>
               </DropDown> */}
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

export default FlightsListingView;
