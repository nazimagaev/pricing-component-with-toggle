import { createContext, useState } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  //   const name = "PricingProvider";

  const plansForAnnually = [
    {
      title: "Basic",
      price: "19.99",
      adress: "500 GB Storage",
      state: "2 Users Allowed",
      location: "Send up to 3 GB",
    },
    {
      title: "Professional",
      price: "24.99",
      adress: "1 TB Storage",
      state: "5 Users Allowed",
      location: "Send up to 10 GB",
      selected: true,
    },
    {
      title: "Master",
      price: "39.99",
      adress: "2 TB Storage",
      state: "10 Users Allowed",
      location: "Send up to 20 GB",
    },
  ];

  const plansForMonthly = [
    {
      title: "Basic",
      price: "199.99",
      adress: "5000 GB Storage",
      state: "2 Users Allowed",
      location: "Send up to 3 GB",
    },
    {
      title: "Professional",
      price: "249.99",
      adress: "10 TB Storage",
      state: "50 Users Allowed",
      location: "Send up to 10 GB",
      selected: true,
    },
    {
      title: "Master",
      price: "399.99",
      adress: "20 TB Storage",
      state: "100 Users Allowed",
      location: "Send up to 20 GB",
    },
  ];

  const [checked, setChecked] = useState(false);
  return (
    <PricingContext.Provider
      value={{ plansForAnnually, plansForMonthly, checked, setChecked }}
    >
      {children}
    </PricingContext.Provider>
  );
};
