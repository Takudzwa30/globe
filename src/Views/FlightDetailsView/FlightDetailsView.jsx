import React, { useState } from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";

// Components
import CustomButton from "../../Components/CustomButton/CustomButton";
import FlightCard from "./Components/FlightCard/FlightCard";

// Images
import pilotCabin from "../../Assets/images/pilotCabin.png";
import flightSeats from "../../Assets/images/flightSeats.png";
import familyTogether from "../../Assets/images/familyTogether.png";
import stopWatch from "../../Assets/images/stopWatch.png";

// Icons
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineHeart, AiFillCheckSquare } from "react-icons/ai";
import chevronForward from "../../Assets/images/chevronForward.png";
import location from "../../Assets/images/location.png";
import share from "../../Assets/images/share.png";

// Styles
import Style from "./FlightDetailsView.module.css";

const classData = [
  {
    flightClass: "Economy",
  },
  {
    flightClass: "First Class",
  },
  {
    flightClass: "Busines Class",
  },
];

const images = [
  pilotCabin,
  familyTogether,
  flightSeats,
  pilotCabin,
  familyTogether,
  flightSeats,
  pilotCabin,
  flightSeats,
];

const FlightDetailsView = () => {
  const [selectedClass, setSelectedClass] = useState("Economy");
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
              <AiOutlineHeart className={Style.like} />{" "}
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
        <h4>Basic {selectedClass} Features</h4>
        <div className={Style.classes}>
          {classData.map((item, index) => {
            return (
              <Class
                key={index}
                flightClass={item.flightClass}
                setSelectedClass={setSelectedClass}
                selectedClass={selectedClass}
              />
            );
          })}
        </div>
      </div>
      <div className={Style.classImages}>
        {images.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item})` }}
              alt="flight image"
              className={Style.classImage}
            />
          );
        })}
      </div>
      <div className={Style.policies}>
        <h4>Emirates Airlines Policies</h4>
        <div className={Style.policyWrapper}>
          <div className={Style.policy}>
            <img src={stopWatch} alt="" />
            Pre-flight cleaning, installation of cabin HEPA filters.
          </div>
          <div className={Style.policy}>
            <img src={stopWatch} alt="" />
            Pre-flight health screening questions.
          </div>
        </div>
      </div>
      <FlightCard />
      <FlightCard />
    </Container>
  );
};

const Class = ({ flightClass, setSelectedClass, selectedClass }) => {
  const isSelected = selectedClass === flightClass;

  const handleClick = () => {
    setSelectedClass(flightClass);
  };

  return (
    <div className={Style.class} onClick={handleClick}>
      <BsCheckLg
        style={{
          color: "white",
        }}
        className={isSelected ? Style.checked : Style.unChecked}
      />
      <p>{flightClass}</p>
    </div>
  );
};

export default FlightDetailsView;
