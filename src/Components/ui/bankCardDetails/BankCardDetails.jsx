import React, { useState, useRef } from "react";

// libraries
import { MagicModal } from "@hybris-software/ui-kit";
import useForm from "@hybris-software/use-ful-form";

// Paths
import { paths } from "../../../Routes/routes";

// Components
import SimpleCard from "../simpleCard/SimpleCard";
import SimpleInput from "../simpleInput/SimpleInput";

// Icons
import { FaCcVisa } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

// Styles
import Style from "./BankCardDetails.module.css";
import CustomButton from "../../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

const BankCardDetails = () => {
   const [inFull, setInFull] = useState(0);
   const [cards, setCards] = useState([]);
   const navigate = useNavigate();

   const modalRef = useRef(null);

   const openModal = () => {
      if (modalRef.current) {
         modalRef.current.updateBody(
            <ModalContent setCards={setCards} closeModal={closeModal} />,
            {
               onCloseIconClick: () => {
                  document.documentElement.style.overflow = "unset";
               },
            }
         );

         document.documentElement.style.overflow = "hidden";
      }
   };

   const closeModal = () => {
      modalRef.current.destroy();
      document.documentElement.style.overflow = "unset";
   };

   function maskString(inputString) {
      // Ensure the inputString has at least 16 characters
      if (inputString.length < 16) {
         return inputString;
      }

      // Replace the first 12 digits of the Card Number with asterisks
      const maskedString = "**** " + inputString.substring(15);

      return maskedString;
   }

   return (
      <SimpleCard>
         <MagicModal ref={modalRef} />
         {cards.map((item, index) => {
            return (
               <div
                  key={index}
                  onClick={() => setInFull(index)}
                  className={
                     inFull === index ? Style.selected : Style.notSelected
                  }
               >
                  <div key={index} className={Style.cardDetails}>
                     <FaCcVisa className={Style.icon} />
                     <h6>{maskString(item.cardNumber)}</h6>
                     <p>{item.expiryDate}</p>
                  </div>
                  <div className={Style.tick}>
                     <div className={Style.circle} />
                  </div>
               </div>
            );
         })}{" "}
         <div className={Style.addNew}>
            <IoIosAddCircleOutline
               onClick={() => openModal()}
               className={Style.addIcon}
            />
            <p>Add a new card</p>
         </div>
         <CustomButton
            disabled={cards.length === 0}
            onClick={() => {
               modalRef.current.updateBody(
                  <PaymentSuccessModal closeModal={closeModal} />,
                  {
                     onCloseIconClick: () => {
                        document.documentElement.style.overflow = "unset";
                        navigate(paths.main.receiptDetails);
                     },
                  }
               );
               document.documentElement.style.overflow = "hidden";
            }}
            coloredReverse
         >
            Make Payment
         </CustomButton>
      </SimpleCard>
   );
};

const ModalContent = ({ setCards, closeModal }) => {
   // Form
   const form = useForm({
      inputs: {
         cardNumber: {
            required: true,
            formatter: (value) => {
               // Remove non-numeric characters and limit the string to 16 characters
               const numericString = value.replace(/[^0-9]/g, "").slice(0, 16);

               // Insert a space after every 4 characters
               const formattedString = numericString.replace(/(.{4})/g, "$1 ");

               return formattedString.trim();
            },
            validator: (value) => {
               if (value.length === 19) {
                  return [true, ""];
               } else {
                  return [false, "Invalid Card Number"];
               }
            },
         },
         expiryDate: {
            required: true,
            formatter: (value) => {
               // Remove non-numeric characters
               const numericString = value.replace(/[^0-9]/g, "");

               // Take only the first four characters
               const limitedString = numericString.slice(0, 4);

               // Insert a '/' after the first two characters if there are at least two characters
               const stringWithSlash =
                  limitedString.length >= 2
                     ? limitedString.slice(0, 2) +
                       " / " +
                       limitedString.slice(2)
                     : limitedString;

               if (limitedString.length < 3) {
                  return limitedString;
               } else {
                  return stringWithSlash;
               }
            },
            validator: (value) => {
               if (value.length >= 7) {
                  return [true, ""];
               } else {
                  return [false, "Invalid Date"];
               }
            },
         },
         cvv: {
            required: true,
            formatter: (value) => {
               // Remove non-numeric characters
               const numericString = value.replace(/[^0-9]/g, "");

               // Take only the first three characters
               const limitedString = numericString.slice(0, 3);

               return limitedString;
            },
         },
         name: {
            required: true,
         },
         country: {
            required: true,
         },
      },
   });
   return (
      <div className={Style.modalWrapper}>
         <h2>Add a new Card</h2>
         <div className={Style.inputsGrid}>
            <SimpleInput
               {...form.getInputProps("cardNumber")}
               icon
               label="Card Number"
            />
            <SimpleInput
               {...form.getInputProps("expiryDate")}
               icon
               label="Exp. Date"
            />
            <SimpleInput {...form.getInputProps("cvv")} icon label="CVV" />
            <SimpleInput
               {...form.getInputProps("name")}
               icon
               label="Name on Card"
            />
            <SimpleInput
               {...form.getInputProps("country")}
               icon
               label="Country"
            />
         </div>
         <CustomButton
            coloredReverse
            disabled={!form.isValid()}
            onClick={() => {
               setCards((prevCards) => [...prevCards, form.getApiBody()]);
               closeModal();
            }}
         >
            Add Card
         </CustomButton>
      </div>
   );
};

const PaymentSuccessModal = ({ closeModal }) => {
   // Hooks
   const navigate = useNavigate();
   return (
      <>
         <h2 className={Style.successModalTitle}>Payment Successful</h2>
         <FaCheckCircle className={Style.successIcon} />
         <CustomButton
            coloredReverse
            onClick={() => {
               navigate(paths.main.receiptDetails);
               closeModal();
            }}
         >
            Continue
         </CustomButton>
      </>
   );
};

export default BankCardDetails;
