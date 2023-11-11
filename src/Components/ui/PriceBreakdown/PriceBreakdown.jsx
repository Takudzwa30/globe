import React from "react";

// Components
import SimpleCard from "../../ui/simpleCard/SimpleCard";

// Images
import smallPlane from "../../../Assets/images/smallEmiratesPlane.png";
import hotelView from "../../../Assets/images/hotelViewOutside.png";

// Styles
import Style from "./PriceBreakdown.module.css";

const priceCollection = [
  {
    title: "Base Fare",
    value: 400,
  },
  {
    title: "Discount",
    value: 50,
  },
  {
    title: "Taxes",
    value: 15,
  },
  {
    title: "Service Fees",
    value: 75,
  },
];

// Functions
function calculateTotalPrice(collection) {
  const total = collection.reduce((sum, item) => sum + item.value, 0);
  return total;
}

const PriceBreakdown = ({ version }) => {
  return (
    <SimpleCard>
      <div className={Style.flightDetails}>
        <img src={version === "flight" ? smallPlane : hotelView} alt="" />
        <div>
          {version === "flight" ? (
            <h6>Economy</h6>
          ) : (
            <h6>CVK Park Bosphorus...</h6>
          )}
          {version === "flight" ? (
            <h5>Emirates A380 Airbus</h5>
          ) : (
            <h5>Superior room - 1 double bed or 2 twin beds</h5>
          )}
          <div className={Style.rating}>
            <div className={Style.rate}>4.2</div>
            <p>
              Very Good <span>54 reviews</span>
            </p>
          </div>
        </div>
      </div>
      <div className={Style.separator} />
      <h6 className={Style.protection}>
        Your booking is protected by <span>golobe</span>
      </h6>
      <div className={Style.separator} />
      <PriceDetails priceCollection={priceCollection} />
    </SimpleCard>
  );
};

const PriceDetails = ({ priceCollection }) => {
  return (
    <>
      <div className={Style.priceDetailsTitle}>Price Details</div>
      {priceCollection.map((item, index) => {
        return <Price key={index} {...item} />;
      })}
      <div className={Style.separator} />
      <Price
        style={{
          marginTop: "15px",
        }}
        title="Total"
        value={calculateTotalPrice(priceCollection)}
      />
    </>
  );
};

const Price = ({ title, value, ...style }) => {
  return (
    <div className={Style.price} {...style}>
      <h6>{title}</h6>
      <h6>$ {value}</h6>
    </div>
  );
};

export default PriceBreakdown;
