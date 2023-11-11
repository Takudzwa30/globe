import React, { useState, useRef } from "react";

// libraries
import { MagicModal, Button } from "@hybris-software/ui-kit";

// Components
import SimpleCard from "../simpleCard/SimpleCard";

// Icons
import { FaCcVisa } from "react-icons/fa";

// Styles
import Style from "./BankCardDetails.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

const BankCardDetails = () => {
  const [inFull, setInFull] = useState(true);

  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.updateBody(
      <>
        <h2>Your Modal Content Goes Here</h2>
        <p>This is a sample modal content.</p>
      </>,
      {
        onCloseIconClick: () => {
          document.documentElement.style.overflow = "unset";
        },
      }
    );

    document.documentElement.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalRef.current.hide();
    document.documentElement.style.overflow = "hidden";
  };

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

export default BankCardDetails;
