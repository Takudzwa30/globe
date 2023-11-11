import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";

// Components
import FlightCard from "../../Components/ui/FlightCard/FlightCard";
import PriceBreakdown from "../../Components/ui/PriceBreakdown/PriceBreakdown";
import Payment from "../../Components/ui/payment/Payment";

// Icons
import chevronForward from "../../Assets/images/chevronForward.png";

// Styles
import Style from "./FlightBookingDetailsView.module.css";
import BankCardDetails from "../../Components/ui/bankCardDetails/BankCardDetails";

const FlightBookingDetailsView = () => {
  return (
    <Container>
      <div className={Style.breadCrumb}>
        <p>Turkey</p>
        <img src={chevronForward} alt="" />
        <p>Istanbul</p>
        <img src={chevronForward} alt="" />
        <p>CVK Park Bosphorus Hotel Istanbul</p>
      </div>
      <div className={Style.detailsGrid}>
        <FlightCard version={true} />
        <PriceBreakdown version="flight" />
        <Payment />
        <BankCardDetails />
      </div>
    </Container>
  );
};

export default FlightBookingDetailsView;
