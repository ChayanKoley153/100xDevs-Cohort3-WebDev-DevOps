import { useState, useRef } from "react";
import "./App.css";

// a clock with a start and stop button
function App() {
  const [currentCount, setCurrentCount] = useState(1);
  const [timer, setTimer] = useState(0);

  function startClock() {
    let value = setInterval(function () {
      setCurrentCount(c => c + 1);
    }, 1000);
    setTimer(value);
  }

  function stopClock() {
    console.log(timer);
    clearInterval(timer);
  }

  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  );
}

export default App;
