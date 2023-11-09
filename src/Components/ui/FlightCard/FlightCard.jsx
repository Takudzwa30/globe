import React from "react";

// Icons
import { IoAirplane, IoFastFood } from "react-icons/io5";
import { AiOutlineWifi } from "react-icons/ai";
import { BsFillStopwatchFill } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import lineWithDot from "../../../Assets/images/lineWithDot.png";

// Logos
import emiratesLogo from "../../../Assets/images/emiratesLogo.png";

// Styles
import Style from "./FlightCard.module.css";

const FlightCard = ({ version = false }) => {
   return (
      <div className={Style.card}>
         {version && (
            <div className={Style.price}>
               <h4>Emirates A380 Airbus</h4>
               <h3>$240</h3>
            </div>
         )}
         <div className={Style.top}>
            <h5>Return Wed, Dec 8</h5>
            <h5>2h 28m</h5>
         </div>
         <div className={Style.center}>
            <div className={Style.planeDetails}>
               <img src={emiratesLogo} alt="Emirates" />
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
