import React from "react";

// Components
import CustomButton from "../../../../Components/CustomButton/CustomButton";

// Libraries
import { Container } from "@hybris-software/ui-kit";
import { useNavigate } from "react-router-dom";

// Styles
import Style from "./FlightandHotels.module.css";

const FlightandHotels = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className={Style.flightGrid}>
        <div className={Style.flights}>
          <h1>Flights</h1>
          <h6>Search Flights & Places Hire to our most popular destinations</h6>
          <CustomButton icon to="/">
            Show Flights
          </CustomButton>
        </div>
        <div className={Style.hotels}>
          <h1>Hotels</h1>
          <h6>Search hotels & Places Hire to our most popular destinations</h6>
          <CustomButton icon >
            Show Hotels
          </CustomButton>
        </div>
      </div>
    </Container>
  );
};

export default FlightandHotels;
