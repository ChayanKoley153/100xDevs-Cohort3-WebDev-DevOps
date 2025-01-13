import { useContext } from "react";
import { CountContext, CountContextProvider } from "./CountContextProvider";

function Parent() {
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Increase() {
  const { setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
  );
}

function Decrease() {
  const { setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
  );
}

function Value() {
  const { count } = useContext(CountContext);
  return <p>Count : {count}</p>;
}

export default Parent;
