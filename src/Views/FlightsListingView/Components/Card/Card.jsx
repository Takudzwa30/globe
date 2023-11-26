import React, { useState } from "react";

// Compoents
import CustomButton from "../../../../Components/CustomButton/CustomButton";
import Like from "../../../../Components/Like/Like";

// Libraries
import { useNavigate } from "react-router-dom";

// Paths
import { paths } from "../../../../Routes/routes";

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
  departTime = "12:00 pm",
  arriveTime = "01:28 pm",
  stops,
  duration = "2h 28m",
  fromTo = "EWR-BNA",
}) => {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={Style.card}>
      <img src={logoImage} alt="" />
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
        <div className={Style.times}>
          <div className={Style.time}>
            <h6>{departTime}</h6> - <h6>{arriveTime}</h6>
          </div>
          <div className={Style.stops}>
            {stops ? <p>{stops}</p> : <p>non stop</p>}
          </div>
          <div>
            <h6>{duration}</h6>
            <p>{fromTo}</p>
          </div>
        </div>
        <div className={Style.times}>
          <div className={Style.time}>
            <h6>{departTime}</h6> - <h6>{arriveTime}</h6>
          </div>
          <div className={Style.stops}>
            {stops ? <p>{stops}</p> : <p>non stop</p>}
          </div>
          <div>
            <h6>{duration}</h6>
            <p>{fromTo}</p>
          </div>
        </div>
        <div className={Style.separator} />
        <div className={Style.buttons}>
          <Like like={like} setLike={setLike} />
          <CustomButton
            onClick={() => navigate(paths.main.flightDetails)}
            coloredReverse
          >
            View Deals
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
