import React from "react";

// Images
import emiratesLogo from "../../../../Assets/images/emiratesLogo.png";

// Styles
import Style from "./Card.module.css";

const Card = ({
  logoImage,
  rating,
  totalReviews,
  price,
  departure,
  arrival,
  favourite,
  nonStop,
}) => {
  return (
    <div className={Style.card}>
      {/* <div
        className={Style.logo}
        style={{
          backgroundImage: `url(${emiratesLogo})`,
        }}
      /> */}
      <img src={emiratesLogo} alt="" />
      <div className={Style.flightDetails}>
        <div className={Style.top}>
          <div className={Style.reviews}>
            <div className={Style.rating}>4.2</div>
            <p>
              <span>Very Good</span> 54 reviews
            </p>
          </div>
          <div className={Style.price}>
            <p>starting from</p>
            <h4>$104</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
