import React, { useState } from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";

// Components
import CustomButton from "../../Components/CustomButton/CustomButton";

// Icons
import { AiOutlineHeart, AiFillCheckSquare } from "react-icons/ai";
import chevronForward from "../../Assets/images/chevronForward.png";
import location from "../../Assets/images/location.png";
import share from "../../Assets/images/share.png";

// Styles
import Style from "./FlightDetailsView.module.css";

const FlightDetailsView = () => {
  return (
    <Container>
      <div className={Style.breadCrumb}>
        <p>Turkey</p>
        <img src={chevronForward} alt="" />
        <p>Istanbul</p>
        <img src={chevronForward} alt="" />
        <p>CVK Park Bosphorus Hotel Istanbul</p>
      </div>
      <div className={Style.flightDetails}>
        <div className={Style.detailsLeft}>
          <h4>Emirates A380 Airbus</h4>
          <p>
            <img src={location} alt="location" />
            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
          </p>
          <div className={Style.reviews}>
            <div className={Style.rating}>4.2</div>
            <p>
              {" "}
              <span>Very Good</span> 54 reviews
            </p>
          </div>
        </div>
        <div className={Style.detailsRight}>
          <h3>$240</h3>
          <div className={Style.buttonsWrapper}>
            <div className={Style.favorite}>
              {" "}
              <AiOutlineHeart className={Style.heart} />{" "}
            </div>
            <div className={Style.share}>
              <img src={share} alt="" />
            </div>
            <CustomButton
              style={{
                paddingInline: "40px",
              }}
              coloredReverse
            >
              Book now
            </CustomButton>
          </div>
        </div>
      </div>
      <div className={Style.bigPlane} />
      <div className={Style.features}>
        <h4>Basic Economy Features</h4>
        <div className={Style.classes}></div>
      </div>
    </Container>
  );
};

export default FlightDetailsView;
