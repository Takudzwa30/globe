import React, { useState } from "react";

// Libraires
import { Container } from "@hybris-software/ui-kit";

// Styles
import Style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={Style.hero}>
      <Container>
        <h1>Make your travel whishlist, we’ll do the rest</h1>
        <h5>Special offers to suit your plan</h5>
      </Container>
    </div>
  );
};

export default HeroSection;
