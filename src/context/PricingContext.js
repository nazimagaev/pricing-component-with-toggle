import { createContext, useState } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  //   const name = "PricingProvider";

  const allPricing = {
    full: {
      basic: "$199.99",
      pro: "$249.99",
      master: "$399.99",
    },
    monthly: {
      basic: "$19.99",
      pro: "$24.99",
      master: "$39.99",
    },
  };
  const [enabled, setEnabled] = useState(false);
  return (
    <PricingContext.Provider value={{ allPricing, enabled, setEnabled }}>
      {children}
    </PricingContext.Provider>
  );
};
