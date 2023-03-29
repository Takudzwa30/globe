import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";

// Images
import turkey from "../../../../Assets/images/destinationTurkey.png";

// Style
import Style from "./Plan.module.css";

// Data
const places = [
  {
    image: turkey,
    destination: "Istanbul, Turkey",
  },
  {
    image: turkey,
    destination: "Istanbul, Turkey",
  },
  {
    image: turkey,
    destination: "Istanbul, Turkey",
  },
  {
    image: turkey,
    destination: "Istanbul, Turkey",
  },
  {
    image: turkey,
    destination: "Istanbul, Turkey",
  },
  {
    image: turkey,
    destination: "Istanbul, Turkey",
  },
  {
    image: turkey,
    destination: "Istanbul, Turkey",
  },
  {
    image: turkey,
    destination: "Istanbul, Turkey",
  },
  {
    image: turkey,
    destination: "Istanbul, Turkey",
  },
];

const Plan = () => {
  return (
    <Container>
      <div className={Style.head}>
        <div>
          <h3>Plan your perfect trip</h3>
          <h6>Search Flights & Places Hire to our most popular destinations</h6>
        </div>
        <div className={Style.seeMore}>See more places</div>
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
  console.log(image);
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
