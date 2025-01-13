import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <h3>Stopwatch in React using useEffect</h3>
      </div>
      <div>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;
