import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";

// Styles
import Style from "./Reviews.module.css";
import CustomButton from "../../../../Components/CustomButton/CustomButton";

const Reviews = () => {
  return (
    <Container>
      <div className={Style.head}>
        <div>
          <h3>Reviews</h3>
          <h6>What people says about Golobe facilities</h6>
        </div>
        <CustomButton to={""}>See All</CustomButton>
      </div>
    </Container>
  );
};

export default Reviews;
