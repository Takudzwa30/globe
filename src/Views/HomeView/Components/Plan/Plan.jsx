import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";
import { useNavigate } from "react-router-dom";

// Components
import CustomButton from "../../../../Components/CustomButton/CustomButton";

// Routes
import { paths } from "../../../../Routes/routes";

// Images
import turkey from "../../../../Assets/images/destinationTurkey.png";
import sydney from "../../../../Assets/images/sydneyImage.png";
import baku from "../../../../Assets/images/bakuImage.png";
import male from "../../../../Assets/images/maleImage.png";
import paris from "../../../../Assets/images/parisImage.png";
import NY from "../../../../Assets/images/NYImage.png";
import london from "../../../../Assets/images/londonImage.png";
import tokyo from "../../../../Assets/images/tokyoImage.png";
import dubai from "../../../../Assets/images/dubaiImage.png";

// Style
import Style from "./Plan.module.css";
import ToolTip from "../../../../Components/ui/toolTip/ToolTip";

// Data
const places = [
  {
    image: turkey,
    destination: "Istanbul, Turkey",
  },
  {
    image: sydney,
    destination: "Sydney, Australia",
  },
  {
    image: baku,
    destination: "Baku, Azerbaijan",
  },
  {
    image: male,
    destination: "Malé, Maldives",
  },
  {
    image: paris,
    destination: "Paris, France",
  },
  {
    image: NY,
    destination: "New York, US",
  },
  {
    image: london,
    destination: "London, UK",
  },
  {
    image: tokyo,
    destination: "Tokyo, Japan",
  },
  {
    image: dubai,
    destination: "Dubai, UAE",
  },
];

const Plan = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className={Style.head}>
        <div>
          <h3>Plan your perfect trip</h3>
          <h6>Search Flights & Places Hire to our most popular destinations</h6>
        </div>
      </div>
      <div className={Style.cards}>
        {places.map((place, index) => {
          return <Card key={index} {...place} />;
        })}
      </div>
    </Container>
  );
};

const Card = ({ image, destination }) => {
  return (
    <div className={Style.card}>
      <div
        className={Style.imageWrapper}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className={Style.city}>
        <h6>{destination}</h6>
        <div className={Style.activities}>
          <p>Flights</p>
          <p>Hotels</p>
          <p>Resorts</p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
