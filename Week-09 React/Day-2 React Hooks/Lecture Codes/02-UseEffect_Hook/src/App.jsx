import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      // setCount((count) => count + 1);
      setCount(function (count) {
        return count + 1;
      });
    }, 1000);
    console.log("Mounted");
  }, []); 

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
