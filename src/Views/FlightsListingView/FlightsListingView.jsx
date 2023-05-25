import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";

// Components
import Card from "./Components/Card/Card";

// Stytles
import Style from "./FlightsListingView.module.css";

const FlightsListingView = () => {
  return (
    <Container>
      <div className={Style.wrapper}>
        <div>fhksdf</div>
        <div className={Style.cardsWrapper}>
          <Card />
        </div>
      </div>
    </Container>
  );
};

export default FlightsListingView;
