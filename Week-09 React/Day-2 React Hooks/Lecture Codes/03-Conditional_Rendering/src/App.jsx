import { useState, useEffect } from "react";

//conditional rendering
function App() {
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setCounterVisible((c) => !c);
    }, 5000);
  }, []);

  return (
    <div>
      hi
      {counterVisible && <Counter></Counter>}
      hello
    </div>
  );
}

//mounting, re-rendering, unmounting
function Counter() {
  const [count, setCount] = useState(0);

  //clearInterval
  useEffect(function() {
    console.log("on mount");
    let clock = setInterval(() => {
      console.log("form inside setInterval");
      setCount(c => c + 1);
    }, 1000);

    return function () {
      console.log("on unmount");
      clearInterval(clock);
    };
  }, []); 

  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  );
}

export default App;
