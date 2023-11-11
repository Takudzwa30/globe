import React, { useState } from "react";

// Components
import SimpleCard from "../simpleCard/SimpleCard";

// Icons
import { FaCcVisa } from "react-icons/fa";

// Styles
import Style from "./BankCardDetails.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

const BankCardDetails = () => {
  const [inFull, setInFull] = useState(true);

  return (
    <SimpleCard>
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
        <IoIosAddCircleOutline className={Style.addIcon} />
        <p>Add a new card</p>
      </div>
    </SimpleCard>
  );
};

export default BankCardDetails;
