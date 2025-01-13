import { useContext } from "react";
import { BulbContextProvider, BulbContext } from "./BulbContextProvider";

function App() {
  return (
    <BulbContextProvider>
      <Light />
    </BulbContextProvider>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);

  return <div>
    {bulbOn ? "Bulb is on" : "Bulb is off"}
  </div>;
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  function toggleBulb() {
    setBulbOn(!bulbOn);
  }

  return (
    <div>
      <button onClick={toggleBulb}>Toggle the Bulb</button>
    </div>
  );
}

export default App;
