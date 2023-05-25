import React from "react";

// Icons
import { IoAirplane, IoFastFood } from "react-icons/io5";
import { AiOutlineWifi } from "react-icons/ai";
import { BsFillStopwatchFill } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import lineWithDot from "../../../../Assets/images/lineWithDot.png";

// Styles
import Style from "./FlightCard.module.css";

// TODO: get the image for the emirates logo...

const FlightCard = () => {
  return (
    <div className={Style.card}>
      <div className={Style.top}>
        <h5>Return Wed, Dec 8</h5>
        <h5>2h 28m</h5>
      </div>
      <div className={Style.center}>
        <div className={Style.planeDetails}>
          <img src="" alt="Emirates" />
          <div className={Style.details}>
            <h4>Emirates</h4>
            <p>Airbus A320</p>
          </div>
        </div>
        <div className={Style.amenities}>
          <div className={Style.amenity}>
            <IoAirplane className={Style.icon} />
          </div>
          <div className={Style.amenity}>
            <AiOutlineWifi className={Style.icon} />
          </div>
          <div className={Style.amenity}>
            <BsFillStopwatchFill className={Style.icon} />
          </div>
          <div className={Style.amenity}>
            <IoFastFood className={Style.icon} />
          </div>
          <div className={Style.amenity}>
            <MdOutlineAirlineSeatReclineNormal className={Style.icon} />
          </div>
        </div>
      </div>
      <div className={Style.bottom}>
        <div className={Style.departureDetails}>
          <h4>12:00 pm</h4>
          <h6>Newark(EWR)</h6>
        </div>
        <div className={Style.icons}>
          <img src={lineWithDot} alt="dotLine" />
          <IoAirplane />
          <img src={lineWithDot} alt="dotLine" />
        </div>
        <div className={Style.departureDetails}>
          <h4>12:00 pm</h4>
          <h6>Newark(EWR)</h6>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
