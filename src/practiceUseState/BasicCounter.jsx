import React, { useState } from "react";

export default function BasicCounter() {
  const [counter, setCounter] = useState(0);

  function updateCounter() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <button onClick={updateCounter}>Counter {counter}</button>
    </div>
  );
}
