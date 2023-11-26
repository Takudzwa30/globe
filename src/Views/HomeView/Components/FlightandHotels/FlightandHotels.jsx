import React from "react";

// Components
import CustomButton from "../../../../Components/CustomButton/CustomButton";
import ToolTip from "../../../../Components/ui/toolTip/ToolTip";

// Libraries
import { Container } from "@hybris-software/ui-kit";
import { useNavigate } from "react-router-dom";

// Paths
import { paths } from "../../../../Routes/routes";

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
          <CustomButton icon onClick={() => navigate(paths.main.flightsList)}>
            Show Flights
          </CustomButton>
        </div>
        <div className={Style.hotels}>
          <h1>Hotels</h1>
          <h6>Search hotels & Places Hire to our most popular destinations</h6>
          <ToolTip>
            <CustomButton icon>Show Hotels</CustomButton>
          </ToolTip>
        </div>
      </div>
    </Container>
  );
};

export default FlightandHotels;
