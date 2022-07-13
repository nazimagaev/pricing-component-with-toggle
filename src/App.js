import "./App.css";
import { useContext } from "react";
import { PricingContext } from "./context/PricingContext";
import Toggle from "./components/Toggle";
import PricingCard from "./components/PricingCard";

function App() {
  // const name = useContext(PricingContext);
  // const { allPricing, enabled, setEnabled } = useContext(PricingContext);

  return (
    <>
      <Toggle />
      {/* <h1 className="text-5xl">{name.monthly.basic}</h1> */}
      {/* {enabled ? <h1>True</h1> : <h1>False</h1>} */}
      <PricingCard />
    </>
  );
}

export default App;
