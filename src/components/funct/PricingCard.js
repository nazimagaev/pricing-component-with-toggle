import React from "react";
import { useContext } from "react";
import { PricingContext } from "../../context/PricingContext";

const PricingCard = () => {
  const { allPricing, enabled, setEnabled } = useContext(PricingContext);

  return (
    <div>
      {enabled ? (
        <>
          <h1>Basic</h1>
          <p>{allPricing.full.basic}</p>
        </>
      ) : (
        <>
          <h1>Basic</h1>
          <p>{allPricing.monthly.master}</p>
        </>
      )}
    </div>
  );
};

export default PricingCard;
