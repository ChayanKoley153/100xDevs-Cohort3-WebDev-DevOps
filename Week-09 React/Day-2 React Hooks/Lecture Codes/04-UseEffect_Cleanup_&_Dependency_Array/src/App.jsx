import { useState, useEffect } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount() {
    setCount1(count1 + 1);
  }

  function decreaseCount() {
    setCount2(count2 - 1);
  }

  return (
    <div>
      <h1>useEffect Cleanup and Dependency Array</h1>

      <Counter count1={count1} count2={count2} />

      <button onClick={increaseCount}>Increase Count</button>

      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
}

function Counter(props) {
  console.log("Counter Component is Rendered");

  useEffect(function () {
    console.log("Counter Component is mounted");

    return function () {
      console.log("Counter Component is unmounted");
    };
  }, []);

  useEffect(
    function () {
      console.log("Count has changed");

      return function () {
        console.log("Cleanup inside second useEffect");
      };
    },
    [props.count1]
  );

  return (
    <div>
      <h2>Counter1: {props.count1}</h2>
      <h2>Counter2: {props.count2}</h2>
    </div>
  );
}

export default App;
