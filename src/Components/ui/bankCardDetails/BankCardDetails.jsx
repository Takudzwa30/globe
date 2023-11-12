import React, { useState, useRef } from "react";

// libraries
import { MagicModal } from "@hybris-software/ui-kit";

// Components
import SimpleCard from "../simpleCard/SimpleCard";
import SimpleInput from "../simpleInput/SimpleInput";

// Icons
import { FaCcVisa } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

// Styles
import Style from "./BankCardDetails.module.css";
import SimpleSelect from "../../SimpleSelect/SimpleSelect";

const BankCardDetails = () => {
  const [inFull, setInFull] = useState(true);

  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.updateBody(<ModalContent />, {
      onCloseIconClick: () => {
        document.documentElement.style.overflow = "unset";
      },
    });

    document.documentElement.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalRef.current.hide();
    document.documentElement.style.overflow = "hidden";
  };

  // TODO: check this formater function and impliment it in the form
  function formatString(inputString) {
    // Remove non-numeric characters and limit the string to 16 characters
    const numericString = inputString.replace(/[^0-9]/g, '').slice(0, 16);
  
    // Insert a space after every 4 characters
    const formattedString = numericString.replace(/(.{4})/g, '$1 ');
  
    return formattedString.trim(); // Trim any trailing space
  }
  
  // Example usage:
  const input = "fsasdadas13232xsads12323dsa32";
  const result = formatString(input);
  console.log(result);
  

  return (
    <SimpleCard>
      <MagicModal ref={modalRef} />
      <div
        onClick={() => setInFull((prev) => !prev)}
        className={inFull ? Style.selected : Style.notSelected}
      >
        <div className={Style.cardDetails}>
          <FaCcVisa className={Style.icon} />
          <h6>**** 4321</h6>
          <p>02/27</p>
        </div>
        <div className={Style.tick}>
          <div className={Style.circle} />
        </div>
      </div>
      <div className={Style.addNew}>
        <IoIosAddCircleOutline
          onClick={() => openModal()}
          className={Style.addIcon}
        />
        <p>Add a new card</p>
      </div>
    </SimpleCard>
  );
};

const ModalContent = () => {
  return (
    <div className={Style.modalWrapper}>
      <h2>Add a new Card</h2>
      <div className={Style.inputsGrid}>
        <SimpleInput icon label="Card Number" />
        <SimpleInput icon label="Exp. Date" />
        <SimpleInput icon label="CVC" />
        <SimpleInput icon label="Name on Card" />
        <SimpleInput icon label="CVC" />
      </div>
    </div>
  );
};

export default BankCardDetails;
