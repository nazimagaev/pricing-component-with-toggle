import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PricingProvider } from "./context/PricingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PricingProvider>
      <App />
    </PricingProvider>
  </React.StrictMode>,
);
