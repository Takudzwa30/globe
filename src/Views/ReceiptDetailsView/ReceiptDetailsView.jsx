import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";
import { useLocation } from "react-router-dom";

// Components
import CustomButton from "../../Components/CustomButton/CustomButton";
import ToolTip from "../../Components/ui/toolTip/ToolTip";

// Icons
import chevronForward from "../../Assets/images/chevronForward.png";
import locationImage from "../../Assets/images/location.png";
import share from "../../Assets/images/share.png";
import downArrowVector from "../../Assets/images/downArrowVector.png";
import planeSmallIcon from "../../Assets/images/planeSmallIcon.png";
import flightCalendarIcon from "../../Assets/icons/flightCalendarIcon.png";
import { BsDot } from "react-icons/bs";

// Images
import userImage from "../../Assets/images/userImage.png";
import ticketQRCode from "../../Assets/images/ticketQRCode.png";
import routeOfFlight from "../../Assets/images/routeOfFlight.png";

// Styles
import Style from "./ReceiptDetailsView.module.css";

// Data
const flightPoints = [
  {
    image: flightCalendarIcon,
    title: "Date",
    subTitle: "Newark(EWR)",
  },
  {
    image: flightCalendarIcon,
    title: "Flight time",
    subTitle: "12:00 pm",
  },
  {
    image: flightCalendarIcon,
    title: "Gate",
    subTitle: "A12",
  },
  {
    image: flightCalendarIcon,
    title: "Seat",
    subTitle: "128",
  },
];

const payments = [
  "If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes. ",
  "If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.",
  "Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.",
];

const ReceiptDetailsView = () => {
  // Hooks
  const location = useLocation();

  // Variables
//   const flight = location?.state?.flight;
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
            <img src={locationImage} alt="location" />
            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
          </p>
        </div>
        <div className={Style.detailsRight}>
          <h3>$240</h3>
          <div className={Style.buttonsWrapper}>
            <ToolTip>
              <div className={Style.share}>
                <img src={share} alt="" />
              </div>
            </ToolTip>
            <ToolTip>
              <CustomButton
                style={{
                  paddingInline: "40px",
                }}
                coloredReverse
              >
                Download
              </CustomButton>
            </ToolTip>
          </div>
        </div>
      </div>
      <div className={Style.ticketWrapper}>
        <div className={Style.timing}>
          <div className={Style.time}>
            <h3>12:00 pm</h3>
            <p>Newark(EWR)</p>
          </div>
          <div className={Style.flightImages}>
            <img src={downArrowVector} alt="" />
            <img src={planeSmallIcon} alt="" />
            <img src={downArrowVector} alt="" />
          </div>
          <div className={Style.time}>
            <h3>12:00 pm</h3>
            <p>Newark(EWR)</p>
          </div>
        </div>
        <div className={Style.ticket}>
          <div className={Style.ticketTop}>
            <div className={Style.userDetails}>
              <img src={userImage} alt="" />
              <div>
                <h5>James Doe</h5>
                <p>Boarding Pass N’123</p>
              </div>
            </div>
            <p className={Style.class}>Business Class</p>
          </div>
          <div className={Style.ticketInfoWrapper}>
            <div className={Style.pointsGrid}>
              {flightPoints.map((point, index) => {
                return <Point key={index} {...point} />;
              })}
            </div>
            <div className={Style.bottom}>
              <div className={Style.flightCode}>
                <h3>EK</h3>
                <p>ABC12345</p>
              </div>
              <img src={ticketQRCode} alt="Ticket QR" />
            </div>
          </div>
        </div>
        <div className={Style.routeImage}>
          <img src={routeOfFlight} alt="Flight Route" />
        </div>
      </div>
      <h4 className={Style.termsTitle}>Terms and Conditions</h4>
      <div className={Style.paymentsWrapper}>
        <h5>Payments</h5>
        {payments.map((item, index) => {
          return <Payment text={item} key={index} />;
        })}
      </div>
      <div className={Style.contact}>
        <h5>Contact Us</h5>
        <div>
          If you have any questions about our Website or our Terms of Use,
          please contact:
          <br /> Golobe Group Q.C.S.C <br />
          Golobe Tower
          <br /> P.O. Box: 22550
          <br /> Doha, State of Qatar
          <br /> Further contact details can be found at golobe.com/help
        </div>
      </div>
    </Container>
  );
};

const Point = ({ image, title, subTitle }) => {
  return (
    <div className={Style.point}>
      <img src={image} alt="Point" />
      <div>
        <p className={Style.pointTitle}>{title}</p>
        <p className={Style.pointSubTitle}>{subTitle}</p>
      </div>
    </div>
  );
};

const Payment = ({ text }) => {
  return (
    <div className={Style.payment}>
      <BsDot />
      <h6>{text}</h6>
    </div>
  );
};

export default ReceiptDetailsView;
