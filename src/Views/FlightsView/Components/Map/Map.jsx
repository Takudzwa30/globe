import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";

// Components
import CustomButton from "../../../../Components/CustomButton/CustomButton";

// Styles
import Style from "./Map.module.css";

const Map = () => {
  return (
    <>
      <Container>
        <div className={Style.head}>
          <div>
            <h3>Let's go places together</h3>
            <h6>
              Discover the latest offers and news and start planning your next
              trip with us.
            </h6>
          </div>
          <CustomButton>See All</CustomButton>
        </div>
      </Container>
      <div className={Style.mapWrapper}>
        <div className={Style.map} />
      </div>
    </>
  );
};

export default Map;
