import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";

// Components
import CustomButton from "../../../../Components/CustomButton/CustomButton";

// Images
import melbourne from "../../../../Assets/images/melbourneBG.png";
import forestOne from "../../../../Assets/images/forestOne.png";

// Styles
import Style from "./Places.module.css";

// Data
const places = [
  {
    bg: melbourne,
    city: "Melbourne",
    subTitle: "An amazing journey",
    price: "700",
  },
  {
    bg: melbourne,
    city: "Melbourne",
    subTitle: "An amazing journey",
    price: "700",
  },
  {
    bg: melbourne,
    city: "Melbourne",
    subTitle: "An amazing journey",
    price: "700",
  },
  {
    bg: melbourne,
    city: "Melbourne",
    subTitle: "An amazing journey",
    price: "700",
  },
];

const Places = () => {
  return (
    <Container>
      <div className={Style.head}>
        <div>
          <h3>Fall into travel</h3>
          <h6>
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </h6>
        </div>
        <CustomButton>See All</CustomButton>
      </div>
      <div className={Style.cards}>
        {places.map((place, index) => {
          return <Card key={index} {...place} />;
        })}
      </div>

      <div className={Style.head}>
        <div>
          <h3>Fall into travel</h3>
          <h6>
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </h6>
        </div>
        <CustomButton>See All</CustomButton>
      </div>
      <div className={Style.packing}>
        <div className={Style.left}>
          <div>
            <div className={Style.top}>
              <h1>Backpacking Sri Lanka</h1>
              <div className={Style.from}>
                <p>From</p>
                <h5>$ 700</h5>
              </div>
            </div>
          </div>
          <p>
            Traveling is a unique experience as it's the best way to unplug from
            the pushes and pulls of daily life. It helps us to forget about our
            problems, frustrations, and fears at home. During our journey, we
            experience life in different ways. We explore new places, cultures,
            cuisines, traditions, and ways of living.
          </p>
          <CustomButton>Book Flight</CustomButton>
        </div>
        <div className={Style.right}>
          <div
            style={{
              backgroundImage: `url(${forestOne})`,
            }}
            className={Style.box}
          />
          <div
            style={{
              backgroundImage: `url(${forestOne})`,
            }}
            className={Style.box}
          />
          <div
            style={{
              backgroundImage: `url(${forestOne})`,
            }}
            className={Style.box}
          />
          <div
            style={{
              backgroundImage: `url(${forestOne})`,
            }}
            className={Style.box}
          />
        </div>
      </div>
    </Container>
  );
};

const Card = ({ bg, city, subTitle, price }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className={Style.card}
    >
      <div className={Style.cardHeading}>
        <div className={Style.headWrapper}>
          <h4>{city}</h4>
          <p>{subTitle}</p>
        </div>
        <div className={Style.price}>
          <h4>$ {price}</h4>
        </div>
      </div>
      <CustomButton coloredReverse>Book Flight</CustomButton>
    </div>
  );
};

export default Places;
