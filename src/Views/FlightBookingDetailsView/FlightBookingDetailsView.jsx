import React from "react";

// Styles
import chevronForward from "../../Assets/images/chevronForward.png";

import Style from "./FlightBookingDetailsView.module.css";
import { Container } from "@hybris-software/ui-kit";
import FlightCard from "../../Components/ui/FlightCard/FlightCard";
import PriceBreakdown from "../../Components/ui/PriceBreakdown/PriceBreakdown";

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
            <PriceBreakdown />
         </div>
      </Container>
   );
};

export default FlightBookingDetailsView;
