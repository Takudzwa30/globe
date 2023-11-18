import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";
// import useQuery from "@hybris-software/use-query";

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
  // TODO: check this API and use it for getting countries
  // const loadMorePageApi = useQuery({
  //    url: `https://restcountries.com/v3.1/all`,
  //    method: "GET",
  //    executeImmediately: true,
  //    onSuccess: (response) => {
  //       console.log(response.data["249"].name);
  //    },
  //    onError: (error) => {
  //       console.log(error);
  //    },
  // });
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
