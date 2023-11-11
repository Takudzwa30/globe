import React, { useState } from "react";

// Components
import SimpleCard from "../simpleCard/SimpleCard";

// Styles
import Style from "./Payment.module.css";

const Payment = () => {
  // Hooks
  const [inFull, setInFull] = useState(true);

  return (
    <SimpleCard>
      <div
        onClick={() => setInFull(true)}
        className={inFull ? Style.selected : Style.notSelected}
      >
        <div>
          <h6 className={Style.title}>Pay in full</h6>
          <p className={Style.subTitle}>Pay the total and you are all set</p>
        </div>
        <div className={Style.tick}>
          <div className={Style.circle} />
        </div>
      </div>
      <div
        style={{
          marginBottom: "0",
        }}
        onClick={() => setInFull(false)}
        className={!inFull ? Style.selected : Style.notSelected}
      >
        <div>
          <h6 className={Style.title}>Pay part now, part later</h6>
          <p className={Style.subTitle}>
            Pay $207.43 now, and the rest ($207.43) will be automatically
            charged to the same payment method on Nov 14, 2022. No extra fees.
          </p>
        </div>
        <div className={Style.tick}>
          <div className={Style.circle} />
        </div>
      </div>
    </SimpleCard>
  );
};

export default Payment;
