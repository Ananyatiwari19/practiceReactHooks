import React, { useState } from "react";

export default function IncrementDecrement() {
  const [counter, setCounter] = useState(0);

  function incCounter() {
    setCounter(counter + 1);
  }

  function decCounter() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <button onClick={incCounter}>Increment</button>
      <div>{counter}</div>
      <button onClick={decCounter}>Decrement</button>
    </div>
  );
}
