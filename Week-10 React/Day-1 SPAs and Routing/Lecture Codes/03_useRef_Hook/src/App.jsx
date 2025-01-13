import { useState, useRef } from "react";
import "./App.css";


// useRef
// reference to a value, such that when u change the value, the component DOES NOT RE-RENDER
function App() {
  const inputRef = useRef();

  function focusOnInput() {
    // document.getElementById("name").focus();
    inputRef.current.focus();
  }

  return <div>
      Sign up
      <input ref={inputRef}  type="text"></input>
      <input type={"text"}></input>
      <button onClick={focusOnInput}>Submit</button>
    </div>
}

export default App;
